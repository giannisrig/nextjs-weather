import Head from 'next/head';
import Layout from "@/components/layout/layout";
import { useState } from 'react';

export default function Home() {

    // Define state variables for the location and weather data
    const [location, setLocation]         = useState('');
    const [weatherData, setWeatherData]   = useState(null);
    const [isLoading, setIsLoading]       = useState(false); // Add state for loading indicator
    const [errorMessage, setErrorMessage] = useState(null); // Add state for error message

    // Define an event handler for the form submission
    const handleSubmit = async (event) => {

        event.preventDefault(); // Prevent the default form submission

        setIsLoading(true); // Set loading state to true when form is submitted
        setErrorMessage(null); // Set error message to null when form is submitted

        // Send a request to the api to fetch the weather data for the given location
        try {
            console.log('Will fetch the weather data here for location:', location )

            // setWeatherData(data); // Set the weather data state to the data fetched
            setLocation("");  // Set location state to empty string

        }
        catch (error) {
            setErrorMessage("Unable to fetch weather data. Please try again."); // Set the error message state when an error occurs
        }
        finally {
            setIsLoading(false); // Set loading state to false when the request is finished
        }

    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <Head>
                    <title>NextJS: Weather App | Demo Project by Giannis Riganas</title>
                    <meta name="description" content="A weather app built with Next.js" />
                </Head>
                <form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Search location..."
                        className="px-4 py-2 rounded-l-lg outline-none bg-white text-black focus:bg-gray-100 border-t-2 border-b-2 border-l-2 border-gray-300 focus:border-blue-400 focus:ring-0 transition-colors duration-300"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                    >
                        Search
                    </button>
                </form>

                {isLoading && (
                    <p className="text-xl text-white font-bold">Loading...</p>
                )}
                {errorMessage && (
                    <p className="text-red-500 text-xl font-bold">{errorMessage}</p>
                )}
                {weatherData && (
                    <p className="text-xl text-white font-bold">Weather Data here</p>
                )}
            </div>
        </Layout>
    )
}
