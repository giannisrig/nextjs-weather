import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "@/types/WeatherData";
import { LocationData } from "@/types/LocationData";

interface SearchWeatherState {
  searchedLocation: string;
  isSearchLoading: boolean;
  errorMessage: string;
  weatherData: WeatherData;
  locationData: LocationData;
}

const initialState: SearchWeatherState = {
  searchedLocation: "",
  isSearchLoading: false,
  errorMessage: "",
  weatherData: null,
  locationData: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedLocation(state, action: PayloadAction<string>) {
      state.searchedLocation = action.payload;
    },
    setIsSearchLoading(state, action: PayloadAction<boolean>) {
      state.isSearchLoading = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    setWeatherData(state, action: PayloadAction<WeatherData>) {
      state.weatherData = action.payload;
    },
    setLocationData(state, action: PayloadAction<LocationData>) {
      state.locationData = action.payload;
    },
  },
});

export const { setSearchedLocation, setIsSearchLoading, setErrorMessage, setWeatherData, setLocationData } =
  searchSlice.actions;

export default searchSlice.reducer;
