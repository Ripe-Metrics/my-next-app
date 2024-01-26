// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state inside the Redux slice
interface CounterStateOne {
  counterOne: number;
}

// Define the initial value of the state
const initialState: CounterStateOne = {
  counterOne: 0,
};

// Define an async thunk for incrementing
export const incrementAsyncOne = createAsyncThunk(
  "counterOne/incrementAsyncOne",
  async () => {
    // Simulate an asynchronous operation, e.g., fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the payload (not required if no payload)
    return null;
  }
);

// Create a Redux slice using createSlice
const counterSliceOne = createSlice({
  name: "counterOne", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions for handling state updates
    incrementCounterOne(state) {
      state.counterOne++;
    },
    decrementCounterOne(state) {
      state.counterOne--;
    },
    addAmountToCounterOne(state, action: PayloadAction<number>) {
      state.counterOne += action.payload;
    },
    resetCounterOne(state) {
      state.counterOne = initialState.counterOne;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsyncOne.fulfilled, (state) => {
      // You can choose which counter to increment in response to the async action
      state.counterOne++;
    });
  },
});
// Export actions and reducer from the created slice
export const {
  incrementCounterOne,
  decrementCounterOne,
  addAmountToCounterOne,
  resetCounterOne,
} = counterSliceOne.actions;
export default counterSliceOne.reducer;
