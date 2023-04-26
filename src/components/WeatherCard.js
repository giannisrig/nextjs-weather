import WeatherIcon from "@/components/WeatherIcon";
import CountryIcon from "@/components/CountryIcon";
import Image from "next/image";
import Link from "next/link";

const WeatherCard = ({ weatherData, locationData }) => {
  const { iconName, temp, tempFeel, humidity, weather, uvi } = weatherData;
  const { country, locationName, location } = locationData;

  return (
    <div className="flex flex-col gap-30px rounded-lg shadow-md bg-mirage w-fit md:w-[550px] max-w-full mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10px md:gap-30px pt-30px px-30px w-full">
        <div className="flex flex-col gap-10px md:gap-15px">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-5px md:gap-10px">
            <p className="text-3xl font-bold text-pink">{temp}°C</p>
            <p className="text-sm text-pink opacity-50">
              {" "}
              Feels like: {tempFeel}°C{" "}
            </p>
          </div>

          <div className="flex items-center gap-10px">
            <CountryIcon countryName={country} />
            <h3 className="text-base">{locationName}</h3>
          </div>
        </div>

        <div className="flex flex-col gap-10px items-center justify-center">
          <WeatherIcon iconName={iconName} weather={weather} />
          <p className="text-base capitalize font-bold">{weather}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20px justify-between items-center w-full py-20px px-30px border-t border-bleached">
        <div className="flex items-center gap-25px">
          <div className="flex items-center gap-7px">
            <Image
              src="/images/weather/humidity.svg"
              alt="Humidity Icon"
              width={20}
              height={20}
            />
            <p className="text-xs ">
              <span className="opacity-70">Humidity:</span>
              {humidity}%
            </p>
          </div>

          <div className="flex items-center gap-7px">
            <Image
              src="/images/weather/uv.svg"
              alt="Humidity Icon"
              width={25}
              height={25}
            />
            <p className="text-xs ">
              <span className="opacity-70">UV:</span>
              {uvi}
            </p>
          </div>
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
};

export default WeatherCard;
