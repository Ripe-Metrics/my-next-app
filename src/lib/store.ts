// Import necessary functions and modules
import { configureStore } from "@reduxjs/toolkit";
import counterOneReducer from "../components/counter/counter-slice-one"
import counterTwoReducer from "@/components/counter/counter-slice-two"

// Configure the Redux store with the counterReducer
export const store = configureStore({
    reducer: {
        counterOne: counterOneReducer,
        counterTwo: counterTwoReducer
    },
});

// Define types for Redux store dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;