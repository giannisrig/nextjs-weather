import { useEffect, useState } from "react";
import getWeatherItem from "@/libs/api/getWeatherItem";
import WeatherCard from "@/components/weather/card/WeatherCard";
import WeatherLoadingCard from "@/components/weather/card/WeatherLoadingCard";

const PopularLocations = () => {
  const [loading, setLoading] = useState(true);
  const [weatherLocationData, setWeatherLocationData] = useState(null);

  useEffect(() => {
    const predefinedLocations = ["London", "Tokyo", "Dubai", "New York"];

    const fetchData = async () => {
      const data = await Promise.all(
        predefinedLocations.map(async (location, index) => {
          const { locationData, weatherData } = await getWeatherItem(location);
          return {
            key: index,
            locationData: locationData,
            weatherData: weatherData,
            name: location,
          };
        })
      );

      setWeatherLocationData(data);
      setLoading(false);
    };

    fetchData().then();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {!loading ? (
        weatherLocationData.map((currentData) => (
          <WeatherCard
            key={currentData.key}
            weatherData={currentData.weatherData}
            locationData={currentData.locationData}
          />
        ))
      ) : (
        <>
          <WeatherLoadingCard />
          <WeatherLoadingCard />
          <WeatherLoadingCard />
          <WeatherLoadingCard />
        </>
      )}
    </div>
  );
};

export default PopularLocations;
