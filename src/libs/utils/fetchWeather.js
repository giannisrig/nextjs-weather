import axios from "axios";

const fetchWeather = async (lat, lng) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);

  return response.data;
};

export default fetchWeather;
