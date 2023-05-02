import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchFormState {
  focus: boolean;
}

const initialState: SearchFormState = {
  focus: false,
};

export const searchFormSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setSearchFormFocus(state, action: PayloadAction<boolean>) {
      state.focus = action.payload;
    },
  },
});

export const { setSearchFormFocus } = searchFormSlice.actions;
export default searchFormSlice.reducer;
