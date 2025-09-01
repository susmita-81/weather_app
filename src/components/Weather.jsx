import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import heavy_icon from "../assets/heavyRain.png";
import sunny_icon from "../assets/sunny.png";
import thunderstorm_icon from "../assets/thunderstorm.png";
import mist_icon from "../assets/mist.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(""); 

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": cloud_icon,
    "04n": cloud_icon,
    "09d": drizzle_icon,
    "09n": drizzle_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": rain_icon,
    "11n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": mist_icon,
    "50n": mist_icon,
    "heavy": heavy_icon,
    "sunny": sunny_icon,
    "thunderstorm": thunderstorm_icon,
    Clear: clear_icon,
    Clouds: cloud_icon,
    Drizzle: drizzle_icon,
    Rain: rain_icon,
    Snow: snow_icon,
    Thunderstorm: thunderstorm_icon,
    Mist: mist_icon
  };
  
  const backgroundClasses = {
    Clear: "sunny-bg",
    Clouds: "cloudy-bg",
    Drizzle: "drizzle-bg",
    Rain: "rainy-bg",
    Thunderstorm: "thunderstorm-bg",
    Snow: "snowy-bg",
    Mist: "mist-bg",
    Smoke: "mist-bg",
    Haze: "mist-bg",
    Dust: "mist-bg",
    Fog: "mist-bg",
    Sand: "mist-bg",
    Ash: "mist-bg",
    Squall: "windy-bg",
    Tornado: "windy-bg"
  };

  const bgClass = backgroundClasses[weatherData?.condition] || "default-bg";

  const convertTemp = (tempC, unit) => unit === "C" ? tempC : (tempC * 9/5) + 32;

  const search = async (city) => {
    if (!city) {
      alert("Enter city name"); // alert for empty input
      return;
    }
  
    try {
      setError(""); // reset error
  
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`);
      const data = await res.json();
  
      if (!res.ok) {
        setWeatherData(null);
        setWeeklyData([]);
        setError("City not found"); // red text below search
        return;
      }
  
      setWeatherData({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        condition: data.weather[0].main,
        icon: allIcons[data.weather[0].icon] || clear_icon
      });
  
      const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`);
      const forecast = await res2.json();
  
      if (!res2.ok) {
        setWeeklyData([]);
        return;
      }
  
      const daily = {};
      forecast.list.forEach(item => {
        const dateObj = new Date(item.dt * 1000);
        const dateKey = dateObj.toLocaleDateString();
        if (!daily[dateKey]) {
          daily[dateKey] = {
            temp: item.main.temp,
            icon: item.weather[0].icon,
            main: item.weather[0].main,
            date: dateObj
          };
        }
      });
  
      setWeeklyData(Object.values(daily).slice(0, 5));
  
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setWeeklyData([]);
      setError("City not found"); // red text on network errors
    }
  };
  


  useEffect(() => {
    search("Nepal");
  }, []);
  
  return (
    <div className={`weather ${bgClass}`}>
   <div className="search_bar">
  <input 
    ref={inputRef} 
    type="search"
    placeholder="Search city"
    onKeyDown={e => e.key === "Enter" && search(inputRef.current.value)}
    autoComplete="off"
    enterKeyHint="search"
  />
</div>

{error && <p className="error-message" style={{ color: "red", marginTop: "5px" }}>{error}</p>}



{weatherData ? (   // ✅ only render if we have valid data
  <>
    <img src={weatherData.icon || clear_icon} alt={weatherData.condition} className="weather-icon"/>
    <p className="temperature" style={{ color: unit === "C" ? "#00ffcc" : "#ffdd00" }}>
      {convertTemp(weatherData.temperature, unit).toFixed(1)}°{unit}
    </p>

    <select value={unit} onChange={(e) => setUnit(e.target.value)} className="unit-select">
      <option value="C">°C</option>
      <option value="F">°F</option>
    </select>

    <p className="location">{weatherData.location}</p>
    <p className="condition">{weatherData.condition}</p>

    <div className="weather-data">
      <div className="col">
        <img src={humidity_icon} alt=""/>
        <div><p>{weatherData.humidity} %</p><span>Humidity</span></div>
      </div>
      <div className="col">
        <img src={wind_icon} alt=""/>
        <div><p>{weatherData.windSpeed} km/h</p><span>Wind Speed</span></div>
      </div>
    </div>

    <div className="weekly-forecast">
      {weeklyData.map((day, i) => (
        <div key={i} className="day-card">
          <p>{day.date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</p>
          <p>{day.date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })}</p>
          <img src={allIcons[day.main] || clear_icon} alt={day.main}/>
          <p>{convertTemp(day.temp, unit).toFixed(1)}°{unit}</p>
          <p>{day.main}</p>
        </div>
      ))}
    </div>
  </>
) : null}   {/* ✅ hides UI if no city found */}

    </div>
  );
};

export default Weather;
