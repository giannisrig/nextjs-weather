import { useAppDispatch } from "@/libs/store/store";
import { Coordinates, GeocodeParams } from "@/types/api/GeocodeParams";
import { setErrorMessage, setIsSearchLoading, setLocationData, setWeatherData } from "@/slices/searchSlice";
import { setGeoNavigationUsed } from "@/slices/geoNavigtionSlice";
import { WeatherItem } from "@/types/WeatherItem";
import getWeatherItem from "@/libs/utils/getWeatherItem";
import { WeatherData } from "@/types/WeatherData";
import { LocationData } from "@/types/LocationData";
import Image from "next/image";

export default function GeoNavigatorButton() {
  // Define the Redux dispatch
  const dispatch = useAppDispatch();

  const clickHandler = async () => {
    // Check if the geolocation is supported
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        // Define the coordinates that will be used as params to fetch data
        const { latitude, longitude }: Coordinates = coords;

        // Set the Weather Card Data based on the browser's coordinates
        setCurrentWeatherData({ latitude, longitude });

        // Update the Geo Navigator State
        dispatch(setGeoNavigationUsed(true));
      });
    }
  };

  const setCurrentWeatherData = async (coordinates: Coordinates) => {
    // Set loading state to true when form is submitted
    dispatch(setIsSearchLoading(true));

    // Set error message to null when form is submitted
    dispatch(setErrorMessage(null));

    // Set the geocode params with the location
    const geocodeParams: GeocodeParams = { coordinates };

    // Send a request to the api to fetch the weather data for the given location
    try {
      // Get the Weather Item
      const result: WeatherItem | string = await getWeatherItem(geocodeParams);

      if (typeof result === "string") {
        // If the result is string then it's the error message
        setErrorMessage(result);
      } else {
        // Define the WeatherItem data
        const weatherItem: WeatherItem = result;
        const weatherData: WeatherData = weatherItem.weatherData;
        const locationData: LocationData = weatherItem.locationData;

        // Set the data to state
        dispatch(setWeatherData(weatherData));
        dispatch(setLocationData(locationData));
      }
    } catch (error) {
      // Set the error message state when an error occurs
      dispatch(setErrorMessage("Unable to fetch weather data. Please try again."));
    } finally {
      // Set loading state to false when the request is finished
      dispatch(setIsSearchLoading(false));
    }
  };

  return (
    <button
      type="button"
      className="absolute left-1/2 top-1/2 z-1 flex translate-x-[-50%] translate-y-[-50%] items-center gap-5px rounded-md bg-pink p-15px transition-colors duration-200 hover:bg-green focus:bg-green active:bg-green"
      onClick={() => clickHandler()}
    >
      <span className="hidden text-base font-bold mdl:block">Use my location</span>
      <Image src="/images/marking.svg" alt="Marker Location icon" className="invert" width={25} height={25} />
    </button>
  );
}
