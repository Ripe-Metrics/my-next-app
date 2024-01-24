import React, { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  incremented,
  decremented,
  amountAdded,
  resetNumber,
} from "../components/counter/counter-slice";
import { useTheme } from "next-themes";

type AppProps = {};

type AppState = {
  amount: number;
};

function Home(props: AppProps) {
  // Use the useAppSelector hook to get the current count from the Redux store
  const count = useAppSelector((state) => state.counter.value);

  // Use the useAppDispatch hook to get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // Handle click event for incrementing the count
  function incrementClick() {
    dispatch(incremented());
  }

  // Handle click event for decrementing the count
  function decrementClick() {
    dispatch(decremented());
  }

  // Handle click event for reseting the count
  function resetClick() {
    dispatch(resetNumber());
  }

  // State for managing the amount value in the input field
  const [byAmount, setByAmount] = useState<AppState>({
    amount: 1,
  });

  // Handle change event for the input field to update the amount in the state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Parse the input value as a number
    const newAmount = parseInt(e.target.value, 10);

    // Check if the parsed value is a valid number
    if (!isNaN(newAmount)) {
      setByAmount({ ...byAmount, amount: newAmount });
    }
  };

  // Handle click event for adding the specified amount to the count
  function handleAmountClick() {
    dispatch(amountAdded(byAmount.amount));
  }

  // toggle light and dark mode
  const [toggleButton, setToggleButton] = useState("🌝");
  const { theme, setTheme } = useTheme();
  const handleToggleButton = () => {
    if (theme === "dark") {
      setToggleButton("🌚");
      setTheme("light");
    } else {
      setTheme("dark");
      setToggleButton("🌝");
    }
  };
  // Render the component
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-400 h-400 border border-black [box-shadow:0px_0px_10px_10px] p-8 text-center ">
          <h2 className="text-xl font-bold">The Count Is...</h2>
          <h1 className="text-4xl font-bold">{count}</h1>
          <button
            className="mt-4 mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={incrementClick}
          >
            Increment
          </button>
          <button
            className="mt-4 mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={decrementClick}
          >
            Decrement
          </button>
          <button
            className="mt-4 mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetClick}
          >
            Reset
          </button>
          <div className="mt-4">
            <input
              type="number"
              value={byAmount.amount}
              onChange={handleChange}
              className="text-center py-2 px-4 rounded border-2 border-gray-300 mr-2"
            />
            <button
              onClick={handleAmountClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Amount
            </button>
          </div>
          <button
            onClick={handleToggleButton}
            className="m-0 top-4/4 left-2/4 -translate-x-1/2 -translate-y-2/2 bg-gray-800 dark:hover:bg-white  transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32"
          >
            {toggleButton}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
