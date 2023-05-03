import axios from "axios";
import { GeocodeParams, LocationData, OpenWeatherResponse, WeatherItem } from "@/types/index";
import formatWeatherDataMinimal from "@/libs/utils/formatWeatherDataMinimal";
import fetchLocationData from "@/libs/utils/fetchLocationData";

const getWeatherItem = async (geocodeParams: GeocodeParams): Promise<WeatherItem | string> => {
  // Reverse geocode to fetch location data from Google Maps including the coordinates
  const geocodedLocationData: LocationData = await fetchLocationData(geocodeParams);

  // Make a call to the project client API to get the weather data
  return await axios
    .get(`/api/weather?latitude=${geocodedLocationData.lat}&longitude=${geocodedLocationData.lng}`)
    .then((response) => {
      const openWeatherResponseData: OpenWeatherResponse = response.data.weatherData;

      // Format the Weather data with the minimal required data only
      const weatherData = formatWeatherDataMinimal(openWeatherResponseData);

      const weatherItem: WeatherItem = {
        weatherData: weatherData,
        locationData: geocodedLocationData,
      };

      return weatherItem;

      // Set location state to empty string
      // setLocation("");
    })
    .catch((error) => {
      // console.log(error);

      // handle error response
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        // error.response.status + ": " + error.response.data
      } else if (error.request) {
        // The request was made but no response was received
        // "The request was made but no response was received"
      } else {
        // Something happened in setting up the request that triggered an Error
        //"An unexpected error occurred while trying to make your request."
      }

      return "error";
    });
};

export default getWeatherItem;
