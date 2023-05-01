type WeatherCondition =
  | ThunderstormConditions
  | Conditions
  | RainConditions
  | SnowConditions
  | AtmosphereConditions
  | ClearConditions
  | CloudsCondition;

// Condition-Codes from https://openweathermap.org/weather-conditions

type ThunderstormConditions = 200 | 201 | 202 | 210 | 211 | 212 | 221 | 230 | 231 | 232;
type Conditions = 300 | 301 | 302 | 310 | 311 | 312 | 313 | 314 | 321;
type RainConditions = 500 | 501 | 502 | 503 | 504 | 511 | 520 | 521 | 522 | 531;
type SnowConditions = 600 | 601 | 602 | 611 | 612 | 613 | 615 | 616 | 620 | 621 | 622;
type AtmosphereConditions = 701 | 711 | 721 | 731 | 741 | 751 | 761 | 762 | 771 | 781;
type ClearConditions = 800;
type CloudsCondition = 801 | 802 | 803 | 804;

interface Weather {
  id: WeatherCondition;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
}

export interface OpenWeatherResponse {
  lat: number;
  log: number;
  timezone: string;
  timezone_offset: number;
  current: MainWeatherData;
  minutely: MainWeatherData[];
  hourly: MainWeatherData[];
  daily: MainWeatherData[];
}
