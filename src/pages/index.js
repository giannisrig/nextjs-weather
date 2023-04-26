import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import validateLocation from "@/libs/utils/validateLocation";
import fetchLocationData from "@/libs/utils/fetchLocationData";
import formatWeatherDataMinimal from "@/libs/utils/formatWeatherDataMinimal";
import Layout from "@/components/layout/Layout";
import WeatherCard from "@/components/WeatherCard";
import PageSectionContainer from "@/components/common/section/PageSectionContainer";
import PopularLocations from "@/components/PopularLocations";

export default function Home() {
  // Define state variables for the location and weather data
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add state for loading indicator
  const [errorMessage, setErrorMessage] = useState(null); // Add state for error message

  // Define an event handler for the form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Set loading state to true when form is submitted
    setIsLoading(true);

    // Set error message to null when form is submitted
    setErrorMessage(null);

    // Send a request to the api to fetch the weather data for the given location
    try {
      // Validate the location entered by the user
      const isValid = validateLocation(location);

      if (!isValid) {
        // Set the error message state when the location is invalid
        setErrorMessage("Invalid location entered.");
        return;
      }

      // Reverse geocode to fetch location data from Google Maps including the coordinates
      const geocodedLocationData = await fetchLocationData(location);

      // Set the location data state to the geocoded data fetched
      setLocationData(geocodedLocationData);

      // Make a call to the project client API to get the weather data
      await axios
        .get(
          `/api/weather?latitude=${geocodedLocationData.lat}&longitude=${geocodedLocationData.lng}`
        )
        .then((response) => {
          // Format the Weather data with the minimal required data only
          const data = formatWeatherDataMinimal(response.data);

          // Set the weather data state to the data fetched
          setWeatherData(data);
          console.log("Weather Data", response.data);

          // Set location state to empty string
          // setLocation("");
        })
        .catch((error) => {
          // console.log(error);

          // handle error response
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            setErrorMessage(error.response.status + ": " + error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            setErrorMessage(
              "The request was made but no response was received"
            );
          } else {
            // Something happened in setting up the request that triggered an Error
            setErrorMessage(
              "An unexpected error occurred while trying to make your request."
            );
          }
        });
    } catch (error) {
      // Set the error message state when an error occurs
      setErrorMessage("Unable to fetch weather data. Please try again.");
    } finally {
      // Set loading state to false when the request is finished
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>NextJS: Weather App | Demo Project by Giannis Riganas</title>
        <meta name="description" content="A weather app built with Next.js" />
      </Head>
      <PageSectionContainer>
        <div className="flex w-full flex-col items-center justify-center gap-30px">
          <h1 className="text-center text-2xl">
            Search for a location to get Weather Data
          </h1>
          <form
            className="mb-4 flex w-[600px] max-w-full"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Enter a location to search for weather..."
              className="grow rounded-l-lg border-b-2 border-l-2 border-t-2 border-gray-300 bg-white px-4 py-2 text-black outline-none transition-colors duration-300 focus:border-blue-400 focus:bg-gray-100 focus:ring-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-r-lg bg-green px-4 py-2 text-white transition-colors duration-300 hover:bg-pink focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Search
            </button>
          </form>

          {isLoading && (
            <p className="text-xl font-bold text-white">Loading...</p>
          )}
          {errorMessage && (
            <p className="text-xl font-bold text-red-500">{errorMessage}</p>
          )}
          {weatherData && (
            <WeatherCard
              weatherData={weatherData}
              locationData={locationData}
            />
          )}
        </div>
      </PageSectionContainer>
      <PageSectionContainer>
        <PopularLocations />
      </PageSectionContainer>
    </Layout>
  );
}
