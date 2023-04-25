import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout/layout";
import WeatherCard from "@/components/WeatherCard";
import getWeatherLocation from '@/libs/api/getWeatherLocation';

export default function Location({ weatherData, locationData }) {

    const router = useRouter();
    const { location } = router.query;

    const [pageWeatherData, setPageWeatherData]   = useState(weatherData); // Weather Data state variable
    const [pageLocationData, setPageLocationData] = useState(locationData); // Location Data state variable


    useEffect(() => {
        const fetchData = async () => {

            // Get the Weather and Location Data
            const {locationData, weatherData } = await getWeatherLocation(location);

            setPageLocationData(locationData);
            setPageWeatherData(weatherData);

        };

        if (!weatherData || !locationData) {
            fetchData().then();
        }

    }, [location, weatherData, locationData]);

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">{location}</h1>
            {pageWeatherData && pageLocationData ? (
                <WeatherCard
                    weatherData={pageWeatherData}
                    locationData={pageLocationData}
                />
            ) : (
                <p>Loading...</p>
            )}
        </Layout>
    );
}

export async function getServerSideProps({ params }) {

    // Read the location name from the url
    const { location } = params;

    try {

        // Get the Weather and Location Data
        const {locationData, weatherData } = await getWeatherLocation(location);

        // Send the Data as props to the page
        return {
            props: {
                weatherData,
                locationData,
            },
        };
    }
    catch (error) {
        console.log(error);
        return {
            props: {
                weatherData: null,
                locationData: null,
            },
        };
    }
}
