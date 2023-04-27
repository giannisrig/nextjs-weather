import WeatherCard from "@/components/WeatherCard";
import { useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsSearchLoadingLoading,
  selectLocationData,
  selectWeatherData,
} from "@/slices/searchSlice";

const SearchWeatherCard = () => {
  const isLoading = useSelector(selectIsSearchLoadingLoading); // updated
  const errorMessage = useSelector(selectErrorMessage); // updated
  const weatherData = useSelector(selectWeatherData); // updated
  const locationData = useSelector(selectLocationData); // updated

  return (
    <>
      {isLoading && <p className="text-xl font-bold text-white">Loading...</p>}
      {errorMessage && (
        <p className="text-xl font-bold text-red-500">{errorMessage}</p>
      )}
      {weatherData && locationData && (
        <WeatherCard weatherData={weatherData} locationData={locationData} />
      )}
    </>
  );
};

export default SearchWeatherCard;
