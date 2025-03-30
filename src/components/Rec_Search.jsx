import React from "react";

const RecentSearches = ({ searches, onSearchSelect }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-gray-800 dark:text-white font-semibold mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSearchSelect(city)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white px-3 py-1 rounded-full"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
