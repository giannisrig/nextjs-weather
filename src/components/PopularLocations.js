import { useEffect, useState } from "react";
import getWeatherLocation from "@/libs/api/getWeatherLocation";
import WeatherCard from "@/components/WeatherCard";

const PopularLocations = () => {
  const [loading, setLoading] = useState(true);
  const [weatherLocationData, setWeatherLocationData] = useState(null);

  useEffect(() => {
    const predefinedLocations = ["London", "Tokyo", "Dubai", "New York"];

    const fetchData = async () => {
      const data = await Promise.all(
        predefinedLocations.map(async (location, index) => {
          const { locationData, weatherData } = await getWeatherLocation(
            location
          );
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {!loading ? (
        weatherLocationData.map((currentData) => (
          <WeatherCard
            key={currentData.key}
            weatherData={currentData.weatherData}
            locationData={currentData.locationData}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularLocations;
