import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getWeatherLocation from "@/libs/api/getWeatherLocation";
import Layout from "@/components/Layout/Layout";
import WeatherCard from "@/components/WeatherCard";
import PageSectionContainer from "@/components/common/section/PageSectionContainer";

export default function Location({ weatherData, locationData }) {
  const router = useRouter();
  const { location } = router.query;

  const [pageWeatherData, setPageWeatherData] = useState(weatherData); // Weather Data state variable
  const [pageLocationData, setPageLocationData] = useState(locationData); // Location Data state variable

  useEffect(() => {
    const fetchData = async () => {
      // Get the Weather and Location Data
      const { locationData, weatherData } = await getWeatherLocation(location);

      setPageLocationData(locationData);
      setPageWeatherData(weatherData);
    };

    if (!weatherData || !locationData) {
      fetchData().then();
    }
  }, [location, weatherData, locationData]);

  return (
    <Layout>
      <PageSectionContainer>
        <h1 className="mb-4 text-3xl font-bold">{location}</h1>
        {pageWeatherData && pageLocationData ? (
          <WeatherCard
            weatherData={pageWeatherData}
            locationData={pageLocationData}
          />
        ) : (
          <p>Loading...</p>
        )}
      </PageSectionContainer>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  // Read the location name from the url
  const { location } = params;

  try {
    // Get the Weather and Location Data
    const { locationData, weatherData } = await getWeatherLocation(location);

    // Send the Data as props to the page
    return {
      props: {
        weatherData,
        locationData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        weatherData: null,
        locationData: null,
      },
    };
  }
}
