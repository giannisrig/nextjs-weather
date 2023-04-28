import fetchWeather from "@/libs/utils/fetchWeather";
import { OpenWeatherResponse, WeatherResponse } from "@/types/index";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<WeatherResponse>) {
  // Get coordinates from the query
  const { latitude, longitude } = req.query;

  // Check if a coordinate is missing and throw an error
  if (!latitude || !longitude) {
    res.status(400).json({ error: "Invalid coordinates" });
    return;
  }

  // Parse coordinates as strings and make them numbers
  const lat = parseFloat(latitude as string);
  const lon = parseFloat(longitude as string);

  try {
    // Make a request to OpenWeather
    const weatherData: OpenWeatherResponse = await fetchWeather(lat, lon);
    // Send the response data from the Open Weather API
    res.status(200).json({ weatherData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
}
