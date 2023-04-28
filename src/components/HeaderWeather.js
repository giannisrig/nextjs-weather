import { useSelector } from "react-redux";
import Link from "next/link";
import {
  selectSearchedLocation,
  selectLocationData,
  selectWeatherData,
} from "@/slices/searchSlice";
import WeatherIcon from "@/components/WeatherIcon";

export default function HeaderWeather() {
  // const isLoading = useSelector(selectIsSearchLoadingLoading); // updated
  // const errorMessage = useSelector(selectErrorMessage); // updated
  const location = useSelector(selectSearchedLocation); // updated
  const weatherData = useSelector(selectWeatherData); // updated
  const locationData = useSelector(selectLocationData); // updated

  return (
    <div className="font-secondary text-sm text-white">
      {locationData && weatherData ? (
        <Link
          href={`/weather/${location}`}
          className="flex items-center gap-7px font-secondary text-sm text-white"
        >
          <div className="w-[20px]">
            <WeatherIcon
              iconName={weatherData.iconName}
              weather={weatherData.weather}
            />
          </div>
          <p className="font-primary text-base font-medium text-green">
            {weatherData.temp}°c
          </p>
          <p className="">{locationData.locationName}</p>
        </Link>
      ) : (
        <p className="">Header Weather here</p>
      )}
    </div>
  );
}
