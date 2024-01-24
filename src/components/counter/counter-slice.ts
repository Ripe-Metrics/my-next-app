// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the state inside the Redux slice
interface CounterState {
    value: number;
}

// Define the initial value of the state
const initialState: CounterState = {
    value: 0,
};

// Create a Redux slice using createSlice
const counterSlice = createSlice({
    name: 'counter', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Define reducer functions for handling state updates
        incremented(state) {
            // Redux Toolkit allows direct mutation of the state
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>) {
            // Update the state based on the payload value
            state.value += action.payload;
        }
    }
});

// Export actions and reducer from the created slice
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;