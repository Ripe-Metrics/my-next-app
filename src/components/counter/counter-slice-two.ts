// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state inside the Redux slice
interface CounterState {
  counter2: number;
}

// Define the initial value of the state
const initialState: CounterState = {
  counter2: 0,
};

// Define an async thunk for incrementing
export const incrementAsyncTwo = createAsyncThunk(
  "counter2/incrementAsyncTwo",
  async () => {
    // Simulate an asynchronous operation, e.g., fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the payload (not required if no payload)
    return null;
  }
);

// Create a Redux slice using createSlice
const counterSlice = createSlice({
  name: "counter2", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions for handling state updates
    incrementcounter2(state) {
      state.counter2++;
    },
    decrementcounter2(state) {
      state.counter2--;
    },
    addAmountTocounter2(state, action: PayloadAction<number>) {
      state.counter2 += action.payload;
    },
    resetcounter2(state) {
      state.counter2 = initialState.counter2;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsyncTwo.fulfilled, (state) => {
      // You can choose which counter to increment in response to the async action
      state.counter2++;
    });
  },
});
// Export actions and reducer from the created slice
export const {
  incrementcounter2,
  decrementcounter2,
  addAmountTocounter2,
  resetcounter2,
} = counterSlice.actions;
export default counterSlice.reducer;
