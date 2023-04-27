import { useSelector } from "react-redux";
import Link from "next/link";
import {
  selectSearchedLocation,
  selectErrorMessage,
  selectIsSearchLoadingLoading,
  selectLocationData,
  selectWeatherData,
} from "@/slices/searchSlice";
import WeatherIcon from "@/components/WeatherIcon";

const HeaderWeather = () => {
  // const isLoading = useSelector(selectIsSearchLoadingLoading); // updated
  // const errorMessage = useSelector(selectErrorMessage); // updated
  const location = useSelector(selectSearchedLocation); // updated
  const weatherData = useSelector(selectWeatherData); // updated
  const LocationData = useSelector(selectLocationData); // updated

  return (
    <div className="font-secondary text-sm text-white">
      {LocationData && weatherData ? (
        <Link
          href={`/weather/${location}`}
          className="flex items-center gap-7px font-secondary text-sm text-white"
        >
          <div className="w-[22px]">
            <WeatherIcon
              iconName={weatherData.iconName}
              weather={weatherData.weather}
            />
          </div>
          <p className="font-primary text-base font-medium text-green">
            {weatherData.temp}°c
          </p>
          <p className="">{LocationData.locationName}</p>
        </Link>
      ) : (
        <p className="">Header Weather here</p>
      )}
    </div>
  );
};

export default HeaderWeather;
