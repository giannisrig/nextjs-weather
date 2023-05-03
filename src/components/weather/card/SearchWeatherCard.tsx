import WeatherCard from "@/components/weather/card/WeatherCard";
import { RootState, useAppSelector } from "@/libs/store/store";
import { WeatherData, LocationData } from "@/types/index";
import WeatherLoadingCard from "@/components/weather/card/WeatherLoadingCard";

export default function SearchWeatherCard() {
  const selector = useAppSelector;
  const isLoading: boolean = selector((state: RootState) => state.search.isSearchLoading); // updated
  const errorMessage: string = selector((state: RootState) => state.search.errorMessage); // updated
  const weatherData: WeatherData = selector((state: RootState) => state.search.weatherData); // updated
  const locationData: LocationData = selector((state: RootState) => state.search.locationData); // updated

  return (
    <>
      {isLoading && <WeatherLoadingCard />}
      {errorMessage && <p className="text-xl font-bold text-red-500">{errorMessage}</p>}
      {isLoading === false && weatherData && locationData && (
        <WeatherCard weatherData={weatherData} locationData={locationData} />
      )}
    </>
  );
}
