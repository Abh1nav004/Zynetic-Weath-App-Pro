import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

const WeatherCard = ({ data, onRefresh }) => {
  if (!data) return null;

  const { name, sys, weather, main, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  const today = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">{name}, {sys.country}</h2>
          <p className="text-gray-600 text-sm">{formattedDate}</p>
        </div>
        <button
          onClick={onRefresh}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
          aria-label="Refresh weather data"
        >
          <FiRefreshCw className="text-gray-700 text-lg" />
        </button>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={iconUrl} alt={weather[0].description} className="w-24 h-24" />
          <div className="ml-4 text-center">
            <h3 className="text-5xl font-bold text-gray-800">{Math.round(main.temp)}°C</h3>
            <p className="text-gray-600 text-lg capitalize">{weather[0].description}</p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
          <WeatherDetail icon={<MdKeyboardArrowUp />} label="Feels Like" value={`${Math.round(main.feels_like)}°C`} />
          <WeatherDetail icon={<FaWind />} label="Wind Speed" value={`${Math.round(wind.speed * 3.6)} km/h`} />
          <WeatherDetail icon={<WiHumidity />} label="Humidity" value={`${main.humidity}%`} />
        </div>
      </div>
    </div>
  );
};

const WeatherDetail = ({ icon, label, value }) => (
  <div className="flex items-center bg-white shadow-sm rounded-lg px-4 py-2">
    <div className="text-blue-500 text-xl">{icon}</div>
    <div className="ml-2">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-800 text-lg">{value}</p>
    </div>
  </div>
);

export default WeatherCard;
