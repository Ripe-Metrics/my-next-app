// Import necessary functions and modules
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counter-slice"

// Configure the Redux store with the counterReducer
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Define types for Redux store dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;