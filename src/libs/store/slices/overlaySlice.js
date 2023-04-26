import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  active: false,
};

export const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setOverlayActive(state, action) {
      state.active = action.payload;
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.overlay,
        };
      },
    },
  },
});

export const { setOverlayActive } = overlaySlice.actions;
export const selectOverlayActive = (state) => state.overlay.active;
export default overlaySlice.reducer;
