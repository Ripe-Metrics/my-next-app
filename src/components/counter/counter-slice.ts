// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state inside the Redux slice
interface CounterState {
  value: number;
}

// Define the initial value of the state
const initialState: CounterState = {
  value: 0,
};

// Define an async thunk for incrementing
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    // Simulate an asynchronous operation, e.g., fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the payload (not required if no payload)
    return null;
  }
);

// Create a Redux slice using createSlice
const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions for handling state updates
    incremented(state) {
      // Redux Toolkit allows direct mutation of the state
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    amountAdded(state, action: PayloadAction<number>) {
      // Update the state based on the payload value
      state.value += action.payload;
    },
    resetNumber(state) {
      state.value = initialState.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state) => {
      state.value++;
    });
  },
});

// Export actions and reducer from the created slice
export const { incremented, decremented, amountAdded, resetNumber } =
  counterSlice.actions;
export default counterSlice.reducer;
