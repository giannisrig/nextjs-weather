import formatWeatherDataMinimal from "@/libs/utils/formatWeatherDataMinimal";
import fetchLocationData from "@/libs/utils/fetchLocationData";
import fetchWeather from "@/libs/utils/fetchWeather";

const getWeatherLocation = async (location) => {
  // Reverse geocode to fetch location data from Google Maps including the coordinates
  const locationData = await fetchLocationData(location);

  // Get the weather data based on the coordinates fetched
  const data = await fetchWeather(locationData.lat, locationData.lng);

  // Format the Weather data with the minimal required data only
  const weatherData = formatWeatherDataMinimal(data);

  return { locationData, weatherData };
};

export default getWeatherLocation;
