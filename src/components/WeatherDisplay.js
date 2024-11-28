import React from 'react';

const WeatherDisplay = ({ weather }) => {
    if (!weather) return null;

    const { main, weather: weatherInfo, name } = weather;

    return (
        <div className="weather-display">
            <h2>Weather in {name}</h2>
            <p>Temperature: {main.temp}°C</p>
            <p>Condition: {weatherInfo[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
                alt={weatherInfo[0].description}
            />
        </div>
    );
};

export default WeatherDisplay;
