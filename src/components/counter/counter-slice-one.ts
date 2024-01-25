// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state inside the Redux slice
interface CounterState {
  counter1: number;
}

// Define the initial value of the state
const initialState: CounterState = {
  counter1: 0,
};

// Define an async thunk for incrementing
export const incrementAsyncOne = createAsyncThunk(
  "counter1/incrementAsyncOne",
  async () => {
    // Simulate an asynchronous operation, e.g., fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the payload (not required if no payload)
    return null;
  }
);

// Create a Redux slice using createSlice
const counterSlice = createSlice({
  name: "counter1", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions for handling state updates
    incrementCounter1(state) {
      state.counter1++;
    },
    decrementCounter1(state) {
      state.counter1--;
    },
    addAmountToCounter1(state, action: PayloadAction<number>) {
      state.counter1 += action.payload;
    },
    resetCounter1(state) {
      state.counter1 = initialState.counter1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsyncOne.fulfilled, (state) => {
      // You can choose which counter to increment in response to the async action
      state.counter1++;
    });
  },
});
// Export actions and reducer from the created slice
export const {
  incrementCounter1,
  decrementCounter1,
  addAmountToCounter1,
  resetCounter1,
} = counterSlice.actions;
export default counterSlice.reducer;
