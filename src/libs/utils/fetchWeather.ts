import axios, { AxiosResponse } from "axios";
import { OpenWeatherResponse } from "@/types/index";

const fetchWeather = async (lat: number, lng: number): Promise<OpenWeatherResponse> => {
  const apiKey: string = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
  const response: AxiosResponse = await axios.get(url);

  return response.data;
};

export default fetchWeather;
