import './App.css';

import React, { useState } from 'react';
import { fetchWeatherData } from './api/weatherService';
import WeatherDisplay from './components/WeatherDisplay';
import SearchCity from './components/SearchCity';

const App = () => {
    const [weather, setWeather] = useState(null);

    const handleSearch = async (city) => {
        try {
            const data = await fetchWeatherData(city);
            setWeather(data);
        } catch (error) {
            alert("Failed to fetch weather data. Please try again.");
        }
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <SearchCity onSearch={handleSearch} />
            <WeatherDisplay weather={weather} />
        </div>
    );
};

export default App;

