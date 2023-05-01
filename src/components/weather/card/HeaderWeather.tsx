import Link from "next/link";
import { WeatherData, LocationData } from "@/types/index";
import { RootState, useAppSelector } from "@/libs/store/store";
import WeatherIcon from "@/components/weather/WeatherIcon";

export default function HeaderWeather() {
  const selector = useAppSelector;
  const location: string = selector((state: RootState) => state.search.searchedLocation); // updated
  const weatherData: WeatherData = selector((state: RootState) => state.search.weatherData); // updated
  const locationData: LocationData = selector((state: RootState) => state.search.locationData); // updated

  return (
    <div className="font-secondary text-sm text-white">
      {locationData && weatherData ? (
        <Link href={`/weather/${location}`} className="flex items-center gap-7px font-secondary text-sm text-white">
          <div className="w-[20px]">
            <WeatherIcon iconName={weatherData.iconName} weather={weatherData.weather} />
          </div>
          <p className="font-primary text-base font-medium text-green">{weatherData.temp}°c</p>
          <p className="">{locationData.locationName}</p>
        </Link>
      ) : (
        <p className="">Header Weather here</p>
      )}
    </div>
  );
}
