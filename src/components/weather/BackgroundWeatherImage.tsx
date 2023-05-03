import { RootState, useAppSelector } from "@/libs/store/store";
import { WeatherData, LocationData } from "@/types/index";
import WeatherLoadingCard from "@/components/weather/card/WeatherLoadingCard";
import Image from "next/image";
import fewCloudsImage from "@/images/background/fewclouds.jpg";

export default function BackgroundWeatherImage() {
  // const selector = useAppSelector;
  // const isLoading: boolean = selector((state: RootState) => state.search.isSearchLoading); // updated
  // const errorMessage: string = selector((state: RootState) => state.search.errorMessage); // updated
  // const weatherData: WeatherData = selector((state: RootState) => state.search.weatherData); // updated
  // const locationData: LocationData = selector((state: RootState) => state.search.locationData); // updated

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-weather" />
      <Image className="h-full w-full object-cover" src={fewCloudsImage} alt={`Few Clouds`} />
    </div>
  );
}
