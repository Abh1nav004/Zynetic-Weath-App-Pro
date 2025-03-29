import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full px-4 py-3 rounded-l-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none shadow-sm dark:bg-zinc-800 dark:border-blue-700 dark:text-white transition-all"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-r-lg transition-colors duration-300 shadow-sm flex items-center justify-center"
          aria-label="Search"
        >
          <FaSearch size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
