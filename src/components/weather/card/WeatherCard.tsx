import Link from "next/link";
import WeatherIcon from "@/components/weather/WeatherIcon";
import CountryIcon from "@/components/weather/CountryIcon";
import WeatherMeta from "@/components/weather/WeatherMeta";
import { WeatherItem } from "@/types/WeatherItem";

export default function WeatherCard({ weatherData, locationData }: WeatherItem) {
  const { iconName, temp, tempFeel, humidity, weather, uvi } = weatherData;
  const { country, locationName, location } = locationData;

  return (
    <div className="mx-auto flex w-fit max-w-full flex-col gap-30px rounded-lg bg-mirage shadow-md md:w-[550px]">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-10px px-30px pt-30px md:flex-row md:gap-30px">
        <div className="flex flex-col gap-10px md:gap-15px">
          <div className="flex flex-col items-center gap-5px md:flex-row md:items-end md:gap-10px">
            <p className="text-3xl font-bold text-pink">{temp}°C</p>
            <p className="text-sm text-pink opacity-50"> Feels like: {tempFeel}°C </p>
          </div>

          <div className="flex items-center gap-10px">
            <CountryIcon countryName={country} />
            <h3 className="text-base">{locationName}</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10px">
          <WeatherIcon iconName={iconName} weather={weather} />
          <p className="text-base font-bold capitalize">{weather}</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-20px border-t border-bleached px-30px py-20px md:flex-row">
        <div className="flex items-center gap-25px">
          <WeatherMeta src="/images/weather/humidity.svg" alt="Humidity Icon" name="Humidity" value={`${humidity}%`} />
          <WeatherMeta src="/images/weather/uv.svg" alt="UV Icon" name="UV" value={uvi} />
        </div>

        <Link
          href={`/weather/${location}`}
          className="text-sm text-green transition-colors duration-200 hover:text-pink"
        >
          View full forecast
        </Link>
      </div>
    </div>
  );
}
