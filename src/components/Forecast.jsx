import React from 'react';

const ForecastSection = ({ data }) => {
    if (!data || !data.list) return null;
  
    const groupedByDay = data.list.reduce((acc, item) => {
      const date = new Date(item.dt * 1000).toISOString().split('T')[0];
      
      if (!acc[date]) {
        acc[date] = [];
      }
      
      acc[date].push(item);
      return acc;
    }, {});
  
    const dailyForecasts = Object.keys(groupedByDay).map(date => {
      const dayData = groupedByDay[date];
      const noonForecast = dayData.find(item => {
        const hour = new Date(item.dt * 1000).getHours();
        return hour >= 11 && hour <= 13;
      }) || dayData[0]; 
      
      return noonForecast;
    }).slice(0, 5);
  
    return (
      <div className="bg-blue-50 rounded-xl shadow-lg p-8 font-sans">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">5-Day Forecast</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {dailyForecasts.map((forecast) => {
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            
            return (
              <div 
                key={forecast.dt} 
                className="bg-white rounded-xl p-5 flex flex-col items-center shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              >
                <p className="text-lg font-medium text-gray-700">{day}</p>
                <p className="text-sm text-gray-600 mb-3">{dayMonth}</p>
                
                <img 
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
                  alt={forecast.weather[0].description}
                  className="w-20 h-20" 
                />
                
                <p className="text-2xl font-bold text-gray-800 mt-3">
                  {Math.round(forecast.main.temp)}°C
                </p>
                
                <p className="text-sm text-gray-600 capitalize text-center mt-2">
                  {forecast.weather[0].description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default ForecastSection;
