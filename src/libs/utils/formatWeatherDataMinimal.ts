import { OpenWeatherResponse, WeatherData } from "@/types/index";
export default function formatWeatherDataMinimal(weatherData: OpenWeatherResponse): WeatherData {
  // Prepare the minimal data we need for the WeatherCard component
  const { current } = weatherData; // Get the current weather data
  const iconName = current.weather[0].icon;
  const temp = Math.round(current.temp);
  const tempFeel = Math.round(current.feels_like);
  const humidity = current.humidity;
  const uvi = current.uvi;
  const weather = current.weather[0].description;

  return { iconName, temp, tempFeel, humidity, uvi, weather };
}
