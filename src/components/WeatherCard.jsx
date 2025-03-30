import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{data.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{data.weather[0].description}</p>
      <p className="text-4xl font-bold text-blue-500 dark:text-blue-400 mt-2">{data.main.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
