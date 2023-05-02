import { useEffect, useState, useRef } from "react";
import validateLocation from "@/libs/utils/validateLocation";
import fetchLocationData from "@/libs/utils/fetchLocationData";
import axios from "axios";
import formatWeatherDataMinimal from "@/libs/utils/formatWeatherDataMinimal";
import {
  setErrorMessage,
  setIsSearchLoading,
  setLocationData,
  setSearchedLocation,
  setWeatherData,
} from "@/slices/searchSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/libs/store/store";
import Image from "next/image";
import { setSearchFormFocus } from "@/slices/searchFormSlice";

interface SearchFormProps {
  header?: boolean;
  inputClass?: string;
  btnClass?: string;
}

export default function SearchForm({ header, inputClass, btnClass }: SearchFormProps) {
  const inputClasses = inputClass
    ? inputClass
    : "w-full rounded-l-lg border-b-2 border-l-2 border-t-2 border-gray-300 bg-white px-4 py-2 text-black outline-none transition-colors duration-300 focus:border-blue-400 focus:bg-gray-100 focus:ring-0";
  const btnClasses = btnClass
    ? btnClass
    : "rounded-r-lg bg-green px-4 py-2 text-white transition-colors duration-300 hover:bg-pink focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

  // Define the Redux dispatch
  const dispatch = useAppDispatch();

  // Get the Search Form focus state
  const searchFormFocus = useAppSelector((state: RootState) => state.searchForm.focus); // updated

  // Define state variables for the location and weather data
  const [location, setLocation] = useState("");
  const [keyCommandAnimation, setKeyCommandAnimation] = useState("");

  // Define the ref element for the form input
  const inputRef = useRef(null);

  // This code is triggered when the searchFormFocus state and header prop change
  useEffect(() => {
    // If the component is rendered on the Header and the state focus is true
    // Then trigger focus on the form input
    if (searchFormFocus === true && header && header === true) {
      setKeyCommandAnimation("bg-mirage opacity-50");
      inputRef.current.focus();
      setTimeout(() => {
        dispatch(setSearchFormFocus(false));
      }, 500);
    }

    if (searchFormFocus === false && header && header === true) {
      setKeyCommandAnimation("");
    }
  }, [searchFormFocus, header, dispatch]);

  // The function that handles the input change
  const handleChange = async (event) => {
    // Set the input value as the location
    const inputLocation: string = event.target.value;
    setLocation(inputLocation);
    dispatch(setSearchedLocation(inputLocation));
  };

  // Define an event handler for the form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Set loading state to true when form is submitted
    dispatch(setIsSearchLoading(true));

    // Set error message to null when form is submitted
    dispatch(setErrorMessage(null));

    // Send a request to the api to fetch the weather data for the given location
    try {
      // Validate the location entered by the user
      const isValid = validateLocation(location);

      if (!isValid) {
        // Set the error message state when the location is invalid
        dispatch(setErrorMessage("Invalid location entered."));
        return;
      }

      // Reverse geocode to fetch location data from Google Maps including the coordinates
      const geocodedLocationData = await fetchLocationData(location);

      // Set the location data state to the geocoded data fetched
      dispatch(setLocationData(geocodedLocationData));

      // Make a call to the project client API to get the weather data
      await axios
        .get(`/api/weather?latitude=${geocodedLocationData.lat}&longitude=${geocodedLocationData.lng}`)
        .then((response) => {
          const { weatherData } = response.data;

          // Format the Weather data with the minimal required data only
          const data = formatWeatherDataMinimal(weatherData);

          // Set the weather data state to the data fetched
          dispatch(setWeatherData(data));
          console.log("Weather Data", weatherData);

          // Set location state to empty string
          // setLocation("");
        })
        .catch((error) => {
          // console.log(error);

          // handle error response
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            dispatch(setErrorMessage(error.response.status + ": " + error.response.data));
          } else if (error.request) {
            // The request was made but no response was received
            dispatch(setErrorMessage("The request was made but no response was received"));
          } else {
            // Something happened in setting up the request that triggered an Error
            dispatch(setErrorMessage("An unexpected error occurred while trying to make your request."));
          }
        });
    } catch (error) {
      // Set the error message state when an error occurs
      dispatch(setErrorMessage("Unable to fetch weather data. Please try again."));
    } finally {
      // Set loading state to false when the request is finished
      dispatch(setIsSearchLoading(false));
    }
  };

  return (
    <form className="flex w-full max-w-[600px]" onSubmit={(e) => handleSubmit(e)}>
      <div className="relative grow">
        <input
          type="text"
          placeholder={header ? "Enter a location" : "Enter a location to search for weather..."}
          className={inputClasses}
          value={location}
          onChange={(e) => handleChange(e)}
          ref={header ? inputRef : null}
        />
        {header ? (
          <div
            className={`absolute right-10px top-1/2 translate-y-[-50%] rounded-md bg-bleached px-7px py-[3px] font-secondary text-xs text-amethyst transition-colors duration-200 ${keyCommandAnimation}`}
          >
            CTR + K
          </div>
        ) : null}
      </div>
      <button type="submit" className={btnClasses}>
        {header ? (
          <Image src="/images/search.svg" className="invert" alt="Search Icon" width={18} height={18} />
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
}
