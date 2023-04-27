import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
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
    setSearchedLocation(state, action) {
      state.searchedLocation = action.payload;
    },
    setIsSearchLoading(state, action) {
      state.isSearchLoading = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    setLocationData(state, action) {
      state.locationData = action.payload;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.search,
        };
      },
    },
  },
});

export const {
  setSearchedLocation,
  setIsSearchLoading,
  setErrorMessage,
  setWeatherData,
  setLocationData,
} = searchSlice.actions;

export const selectSearchedLocation = (state) => state.search.searchedLocation;
export const selectIsSearchLoadingLoading = (state) =>
  state.search.isSearchLoading;
export const selectErrorMessage = (state) => state.search.errorMessage;
export const selectWeatherData = (state) => state.search.weatherData;
export const selectLocationData = (state) => state.search.locationData;
export default searchSlice.reducer;
