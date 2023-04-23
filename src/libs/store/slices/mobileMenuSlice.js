import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    open: false,
};

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        setMobileMenuOpen(state, action) {
            state.open = action.payload;
        },

        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.mobileMenu,
                };
            },
        },
    },
});

export const { setMobileMenuOpen } = mobileMenuSlice.actions;
export const selectMobileMenuOpen = (state) => state.mobileMenu.open;
export default mobileMenuSlice.reducer;
