**1**.🌦️ Weather Dashboard Web App

A responsive weather application built with **React** that allows users to search for any city worldwide and view real-time weather details including temperature, humidity, wind speed, and conditions with matching icons and backgrounds.

---

## 🚀 Features

- 🔍 **Search any city** and fetch live weather data (OpenWeatherMap API).
- 🌡️ Display **temperature** in both °C and °F.
- ☁️ Shows **weather condition** with icons (sunny, cloudy, rainy, etc.).
- 💧 Displays **humidity** percentage.
- 🌬️ Displays **wind speed** in km/h.
- 📅 **5-day forecast** with daily weather details.
- 🎨 Dynamic **background change** based on weather conditions.
- 📱 Fully **responsive** for desktop and mobile.
- ⚠️ **Error handling** for invalid city names.

---

## 🛠️ Technologies Used

- **React (Vite)** – UI and component-based development
- **JavaScript (ES6+)** – logic and state management
- **CSS** – styling and responsive design
- **OpenWeatherMap API** – weather and forecast data

---

## 📂 Project Structure

weather-dashboard/
│── public/ # Static files
│── src/
│ ├── assets/ # Weather icons
│ ├── components/
│ │ └── Weather.jsx # Main weather component
│ ├── Weather.css # Styling
│ └── App.jsx # Root component
│── .env # API key (VITE_APP_ID)
│── package.json
│── README.md

**Task Name:** Weather Dashboard Web App

**Objective:** Create a responsive weather application with search, weather info display, and error handling.

**Core Features Implemented:**

Search any city and fetch weather data (temperature, humidity, wind speed, condition, icon).

Error handling for invalid cities (shows red error message).

Background dynamically changes based on weather conditions.

Celsius ↔ Fahrenheit toggle for temperature.

Weekly 5-day forecast with date, time, weather icon, and temperature.

**Bonus:**

Implemented background themes for sunny, rainy, cloudy, mist, thunderstorm, snowy, windy, etc.

Smooth responsive design for both desktop and mobile.

**Approach:**

Used React + Vite for fast development.

Integrated OpenWeatherMap API for real-time weather and forecast.

Used useRef, useState, and useEffect for search, API calls, and UI updates.

Implemented reusable weather icon mappings and background classes for better scalability.

Added error handling and user experience improvements (alerts + messages).

## How to run locally

1. Clone the repository:

```bash
git clone https://github.com/susmita-81/weather_app.git
<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# weather_app
A React weather application fetching real-time data from OpenWeatherMap API.
>>>>>>> e709b4e1bc8e0089c1eb7102377064aed54098fa
