import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { mobileMenuSlice } from '@/slices/mobileMenuSlice';
import { overlaySlice } from '@/slices/overlaySlice';

const makeStore = () =>
    configureStore({
        reducer: {
            [mobileMenuSlice.name]: mobileMenuSlice.reducer,
            [overlaySlice.name]: overlaySlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
