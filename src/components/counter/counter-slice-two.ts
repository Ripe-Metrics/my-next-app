// Import necessary functions and types from @reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the shape of the state inside the Redux slice
interface CounterStateTwo {
  counterTwo: number;
}

// Define the initial value of the state
const initialState: CounterStateTwo = {
  counterTwo: 0,
};

// Define an async thunk for incrementing
export const incrementAsyncTwo = createAsyncThunk(
  "counterTwo/incrementAsyncTwo",
  async () => {
    // Simulate an asynchronous operation, e.g., fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return the payload (not required if no payload)
    return null;
  }
);

// Create a Redux slice using createSlice
const counterSliceTwo = createSlice({
  name: "counterTwo", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducer functions for handling state updates
    incrementcounterTwo(state) {
      state.counterTwo++;
    },
    decrementcounterTwo(state) {
      state.counterTwo--;
    },
    addAmountTocounterTwo(state, action: PayloadAction<number>) {
      state.counterTwo += action.payload;
    },
    resetcounterTwo(state) {
      state.counterTwo = initialState.counterTwo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsyncTwo.fulfilled, (state) => {
      // You can choose which counter to increment in response to the async action
      state.counterTwo++;
    });
  },
});
// Export actions and reducer from the created slice
export const {
  incrementcounterTwo,
  decrementcounterTwo,
  addAmountTocounterTwo,
  resetcounterTwo,
} = counterSliceTwo.actions;
export default counterSliceTwo.reducer;
