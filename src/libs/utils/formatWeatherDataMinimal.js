export default function formatWeatherDataMinimal(weatherData) {

   // Prepare the minimal data we need for the WeatherCard component
   const {current}   = weatherData; // Get the current weather data
   const iconName    = current.weather[0].icon;
   const temp        = Math.round( parseFloat(current.temp) );
   const tempFeel    = Math.round( parseFloat(current.feels_like) );
   const humidity    = current.humidity;
   const uvi         = current.uvi;
   const weather     = current.weather[0].description;

   return { iconName, temp, tempFeel, humidity, uvi, weather };

}
