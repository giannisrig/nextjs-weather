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
import { LocationData, GeocodeParams, WeatherItem, WeatherData } from "@/types/index";
import { OpenWeatherResponse } from "@/types/api/OpenWeatherResponse";
import getWeatherItem from "@/libs/utils/getWeatherItem";

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

      // Set the geocode params with the location
      const geocodeParams: GeocodeParams = { location };

      // Get the Weather Item
      const result: WeatherItem | string = await getWeatherItem(geocodeParams);

      if (typeof result === "string") {
        // If the result is string then it's the error message
        setErrorMessage(result);
      } else {
        // Define the WeatherItem data
        const weatherItem: WeatherItem = result;
        const weatherData: WeatherData = weatherItem.weatherData;
        const locationData: LocationData = weatherItem.locationData;

        // Set the data to state
        dispatch(setWeatherData(weatherData));
        dispatch(setLocationData(locationData));
      }
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
