import { OpenWeatherResponse } from "@/types/index";

export type WeatherResponse = {
  weatherData?: OpenWeatherResponse;
  error?: string;
};
