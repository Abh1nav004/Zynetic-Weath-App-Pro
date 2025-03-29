import React from 'react';

const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative flex items-center">
          <div className="w-16 h-8 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute top-3 left-2 w-12 h-6 bg-white rounded-full shadow-md"></div>
          <div className="absolute top-0 left-5 w-10 h-10 bg-white rounded-full shadow-md"></div>
          
          <div className="absolute bottom-0 left-3 w-1 h-3 bg-blue-400 rounded-full animate-rainDrop"></div>
          <div className="absolute bottom-0 left-7 w-1 h-3 bg-blue-400 rounded-full animate-rainDrop delay-100"></div>
          <div className="absolute bottom-0 left-11 w-1 h-3 bg-blue-400 rounded-full animate-rainDrop delay-200"></div>
        </div>
        <p className="mt-6 text-xl font-semibold text-gray-700">Fetching weather details...</p>
      </div>
    );
}

export default Loader;
