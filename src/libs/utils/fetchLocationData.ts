import axios, { AxiosResponse } from "axios";
import { LocationData, ReverseGeocodeLocation } from "@/types/index";

const fetchLocationData = async (location: string): Promise<LocationData> => {
  // Make an API call to google maps for reverse geocode in order to get the location coordinates
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Create the Endpoint
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`;

  // Get the response from the API
  const response: AxiosResponse = await axios.get(url);

  // Set the data fetched of type ReverseGeocodeLocation
  const data: ReverseGeocodeLocation = response.data;

  // Set the Location Data we need for the app
  const addressComponents = data.results[0].address_components;
  const country = addressComponents[addressComponents.length - 1].long_name; // Get the full country name
  const locationName = data.results[0].formatted_address; // Get the formatted location name/address by Google Maps
  const { lat, lng } = data.results[0].geometry.location; // Get the coordinates from the first location result

  return { lat, lng, country, locationName, location };
};

export default fetchLocationData;
