import axios from "axios";

const fetchLocationData = async (location) => {
  // Make an API call to google maps for reverse geocode in order to get the location coordinates
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`;
  const response = await axios.get(url);

  // Set the Location Data we need for the app
  const addressComponents = response.data.results[0].address_components;
  const country = addressComponents[addressComponents.length - 1].long_name; // Get the full country name
  const locationName = response.data.results[0].formatted_address; // Get the formatted location name/address by Google Maps
  const { lat, lng } = response.data.results[0].geometry.location; // Get the coordinates from the first location result

  return { lat, lng, country, locationName, location };
};

export default fetchLocationData;
