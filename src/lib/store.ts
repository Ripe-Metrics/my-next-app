// Import necessary functions and modules
import { configureStore } from "@reduxjs/toolkit";
import counter1Reducer from "../components/counter/counter-slice-one"
import counter2Reducer from "@/components/counter/counter-slice-two"

// Configure the Redux store with the counterReducer
export const store = configureStore({
    reducer: {
        counter1: counter1Reducer,
        counter2: counter2Reducer
    },
});

// Define types for Redux store dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;