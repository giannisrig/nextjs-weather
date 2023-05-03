import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeoNavigationState {
  used: boolean;
}

const initialState: GeoNavigationState = {
  used: false,
};

export const geoNavigationSlice = createSlice({
  name: "geoNavigation",
  initialState,
  reducers: {
    setGeoNavigationUsed(state, action: PayloadAction<boolean>) {
      state.used = action.payload;
    },
  },
});

export const { setGeoNavigationUsed } = geoNavigationSlice.actions;
export default geoNavigationSlice.reducer;
