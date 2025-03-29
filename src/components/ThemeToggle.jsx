import React from 'react';
import { MdNightlightRound, MdSunny } from 'react-icons/md';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-blue-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 
                       hover:bg-blue-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {darkMode ? (
                <MdSunny className="w-6 h-6 text-yellow-500 transition-transform transform rotate-0 hover:rotate-180" />
            ) : (
                <MdNightlightRound className="w-6 h-6 text-indigo-500 transition-transform transform rotate-0 hover:-rotate-180" />
            )}
        </button>
    );
};

export default ThemeToggle;
