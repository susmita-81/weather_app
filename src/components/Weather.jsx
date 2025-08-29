import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);
    const [showMore, setShowMore] = useState(false) // Added show more state

    const allIcons = {
"01d": clear_icon,   // clear sky day
  "01n": clear_icon,   // clear sky night
  "02d": cloud_icon,   // few clouds day
  "02n": cloud_icon,   // few clouds night
  "03d": cloud_icon,   // scattered clouds day
  "03n": cloud_icon,   // scattered clouds night
  "04d": cloud_icon,   // broken clouds day
  "04n": cloud_icon,   // broken clouds night
  "09d": drizzle_icon, // shower rain day
  "09n": drizzle_icon, // shower rain night
  "10d": rain_icon,    // rain day
  "10n": rain_icon,    // rain night
  "11d": rain_icon,    // thunderstorm day
  "11n": rain_icon,    // thunderstorm night
  "13d": snow_icon,    // snow day
  "13n": snow_icon,    // snow night
  "50d": humidity_icon,// mist day
  "50n": humidity_icon // mist night
};
const search = async (city) => {
    if(city ===""){
        alert(" Enter Country Name");
        return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  
      // Correct property name and fallback icon
      const icon = allIcons[data.weather[0].icon] || clear_icon;
  
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        condition: data.weather[0].main // e.g., "Clear", "Clouds", "Rain"
      });
    } catch (error) {
      console.error("Weather fetch error:", error);
    }
  };
  

    useEffect(()=>{
        search("Nepal");
    },[])
  return (
    <div className='weather'>
<div className='search_bar'>
    <input ref={inputRef} type='text' placeholder='Search'></input>
    <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>

</div>
<img src={weatherData.icon} alt={weatherData.condition} className='weather-icon' />
<p className='temperature'>{weatherData.temperature}°C</p>
<p className='location'>{weatherData.location}</p>
<p className='condition'>{weatherData.condition}</p>

<div className='weather-data'>
<div className="col">
    <img src={humidity_icon} alt="" />
    <div>
        <p>{weatherData.humidity} %</p>
        <span>
            Humidity
        </span>
    </div>
</div>

<div className="col">
    <img src={wind_icon} alt="" />
    <div>
        <p>{weatherData.windSpeed} km/h</p>
        <span>
            Wind Speed
        </span>
    </div>
</div>
</div>
    </div>
    
  )
}

export default Weather