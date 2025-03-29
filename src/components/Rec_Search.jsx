import React from 'react';

const RecentSearches = ({ searches, onSearchSelect }) => {
    if (!searches || searches.length === 0) {
      return null;
    }
  
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4">
        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-300 mb-3">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {searches.map((city, index) => (
            <button
              key={`${city}-${index}`}
              onClick={() => onSearchSelect(city)}
              className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors duration-200 ease-in-out"
              aria-label={`Search for ${city}`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
export default RecentSearches;
