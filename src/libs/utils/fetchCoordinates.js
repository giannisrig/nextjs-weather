import axios from "axios";

const fetchCoordinates = async ( location ) => {

    // Make an API call to google maps for reverse geocode in order to get the location coordinates
    const apiKey       = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url          = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`;
    const response     = await axios.get(url);
    const { lat, lng } = response.data.results[0].geometry.location; //get the coordinates from the first location result

    return { lat, lng };

};

export default fetchCoordinates;
