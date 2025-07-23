import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].description.toUpperCase()}</p>
      <h1>{Math.round(main.temp)}°C</h1>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
