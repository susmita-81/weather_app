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

WEATHER/
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


📄 Documentation – Weather Dashboard Web App
1. Problem Understanding

The given task was to build a responsive weather dashboard that can display current weather details for any city in the world. It needed to include search functionality, weather icons, background changes, error handling, and responsiveness.

My goal was to create a user-friendly app that works smoothly, provides accurate data, and is visually clear on both desktop and mobile screens.

2. Approach to the Problem
Step 1 – Choosing Tech Stack

Selected React (Vite) for fast setup, modularity, and efficient state handling.

Used OpenWeatherMap API because it provides both current weather and forecast data.

Step 2 – Planning Features

Core Features: Search, display temperature, humidity, wind speed, condition icon, error handling.

Bonus Features: Weekly forecast, Celsius/Fahrenheit toggle, background change by weather condition.

Step 3 – Designing UI/UX

Simple search bar for city input.

Clear weather card showing temperature, condition, humidity, and wind.

Dynamic backgrounds to match the weather (e.g., sunny = bright, rainy = dark).

Responsive CSS for both mobile and desktop views.

Step 4 – Implementing Logic

Used useState for managing data (weather, weekly forecast, unit type).

Used useEffect to load default city (Nepal) on first render.

Created icon mapping object for weather icons.

Created background mapping object for condition-based styling.

Wrote helper function convertTemp to handle °C ↔ °F toggle.

Step 5 – Error Handling

Displayed a red error message when an invalid city is searched.

Cleared previous results to avoid confusion.

Added a fallback clear_icon if API icon not found.

3. Key Decisions Made

Default city = Nepal for first render, so the app is not blank initially.

Mapping objects for icons and backgrounds to make code clean, scalable, and reusable.

Weekly forecast extraction – from 3-hourly forecast, picked first record per day to simplify display.

Separate unit toggle instead of re-fetching data → reduces API calls.

Error-first design → invalid inputs handled gracefully with UI feedback.

4. Challenges Faced & Solutions

Challenge: OpenWeatherMap returns 3-hour intervals for forecast.

Solution: Grouped data by date and selected first entry for daily view.

Challenge: Handling many different weather conditions (clear, rainy, mist, etc.).

Solution: Created a backgroundClasses object mapping all similar conditions to a single style.

Challenge: Managing API key securely.

Solution: Stored it in .env file (VITE_APP_ID) and ignored in GitHub repo.

5. Testing & Validation

Tested with different cities: Kathmandu, Pokhara, New York, London, Sydney.

Tested invalid city names → error message displayed correctly.

Checked responsiveness on Chrome DevTools (mobile vs desktop).

Verified Celsius ↔ Fahrenheit conversion using manual calculations.

6. Outcome

Fully functional Weather Dashboard with responsive design.

Covers all required features + bonus features.

Clean, modular code with proper documentation.

**Task Name:** Weather Dashboard Web App

**Objective:** Create a responsive weather application with search, weather info display, and error handling.

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
