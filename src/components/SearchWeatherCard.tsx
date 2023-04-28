import WeatherCard from "@/components/WeatherCard";
import { RootState, useAppSelector } from "@/libs/store/store";
import { WeatherData, LocationData } from "@/types/index";

export default function SearchWeatherCard() {
  const selector = useAppSelector;
  const isLoading: boolean = selector((state: RootState) => state.search.isLoading); // updated
  const errorMessage: string = selector((state: RootState) => state.search.errorMessage); // updated
  const weatherData: WeatherData = selector((state: RootState) => state.search.weatherData); // updated
  const locationData: LocationData = selector((state: RootState) => state.search.locationData); // updated

  return (
    <>
      {isLoading && <p className="text-xl font-bold text-white">Loading...</p>}
      {errorMessage && <p className="text-xl font-bold text-red-500">{errorMessage}</p>}
      {weatherData && locationData && <WeatherCard weatherData={weatherData} locationData={locationData} />}
    </>
  );
}
