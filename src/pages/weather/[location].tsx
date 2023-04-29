import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getWeatherItem from "@/libs/api/getWeatherItem";
import Layout from "@/components/layout/Layout";
import WeatherCard from "@/components/WeatherCard";
import PageSectionContainer from "@/components/common/section/PageSectionContainer";
import { WeatherItem } from "@/types/index";

export default function Location(weatherItem: WeatherItem) {
  const router = useRouter();
  // const { location } = router.query;
  const location = String(router.query.location);
  const [pageWeatherItem, setPageWeatherItem] = useState(weatherItem); // Weather Data state variable

  useEffect(() => {
    const fetchData = async () => {
      // Get the Weather and Location Data
      const fetchedWeatherItem: WeatherItem = await getWeatherItem(location);

      setPageWeatherItem(fetchedWeatherItem);
    };

    if (!pageWeatherItem.weatherData || !pageWeatherItem.locationData) {
      fetchData().then();
    }
  }, [location, pageWeatherItem.locationData, pageWeatherItem.weatherData, weatherItem]);

  return (
    <Layout>
      <PageSectionContainer>
        <h1 className="mb-4 text-3xl font-bold">{location}</h1>
        {pageWeatherItem.weatherData && pageWeatherItem.locationData ? (
          <WeatherCard weatherData={pageWeatherItem.weatherData} locationData={pageWeatherItem.locationData} />
        ) : (
          <p>Loading...</p>
        )}
      </PageSectionContainer>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  // Read the location name from the url
  const location: string = params.location;

  try {
    // Get the Weather and Location Data
    const weatherItem: WeatherItem = await getWeatherItem(location);

    // Send the Data as props to the page
    return {
      props: {
        weatherItem,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        weatherItem: null,
      },
    };
  }
}
