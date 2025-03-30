import React, { useEffect, useState } from "react";
import SearchBar from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import RecentSearches from "./components/Rec_Search";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
           (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = async (city) => {
    const API_KEY = "25ebf1175a46bfc8e0120094e10768f1";
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setRecentSearches((prev) => [...new Set([city, ...prev])].slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-all">
      <ThemeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
      <RecentSearches searches={recentSearches} onSearchSelect={handleSearch} />
    </div>
  );
};

export default App;
