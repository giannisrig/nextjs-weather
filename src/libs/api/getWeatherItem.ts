import formatWeatherDataMinimal from "@/libs/utils/formatWeatherDataMinimal";
import fetchLocationData from "@/libs/utils/fetchLocationData";
import fetchWeather from "@/libs/utils/fetchWeather";
import { OpenWeatherResponse, LocationData, WeatherData, WeatherItem } from "@/types/index";

const getWeatherItem = async (location: string): Promise<WeatherItem> => {
  // Reverse geocode to fetch location data from Google Maps including the coordinates
  const locationData: LocationData = await fetchLocationData(location);

  // Get the weather data based on the coordinates fetched
  const openWeatherResponse: OpenWeatherResponse = await fetchWeather(locationData.lat, locationData.lng);

  // Format the Weather data with the minimal required data only
  const weatherData: WeatherData = formatWeatherDataMinimal(openWeatherResponse);

  return { locationData, weatherData };
};

export default getWeatherItem;
