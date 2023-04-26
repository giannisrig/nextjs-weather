import fetchWeather from "@/libs/utils/fetchWeather";

export default async function handler(req, res) {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    res.status(400).json({ error: "Invalid coordinates" });
    return;
  }

  try {
    const weatherData = await fetchWeather(latitude, longitude);
    res.status(200).json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
}
