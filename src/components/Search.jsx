import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full px-4 py-3 text-gray-800 dark:text-white focus:outline-none"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
