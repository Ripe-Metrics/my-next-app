import React, { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  incremented,
  decremented,
  amountAdded,
  resetNumber,
} from "../components/counter/counter-slice";

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

  function decrementClick() {
    dispatch(decremented());
  }

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
    const inputValue = e.target.value;

    // Check if the input is empty
    if (inputValue === '') {
      // If empty, set the value to 0
      setByAmount({ ...byAmount, amount: 0 });
    } else if (!isNaN(newAmount)) {
      setByAmount({ ...byAmount, amount: newAmount });
    }
  };

  // Handle click event for adding the specified amount to the count
  function handleAmountClick() {
    dispatch(amountAdded(byAmount.amount));
  }

  // Render the component
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="w-400 h-400 border border-black p-8 text-center bg-[#333333]">
          <h2 className="text-xl text-[#FAF9F6] font-bold">The Count Is...</h2>
          <h1 className="text-4xl text-[#FAF9F6] font-bold">{count}</h1>
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
          <div className="mt-4"></div>
          <div className="mt-4">
            <button
              onClick={handleAmountClick}
              className="mx-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              <input
                type="text"
                value={byAmount.amount}
                onChange={handleChange}
                onClick={(e) => e.stopPropagation()}
                maxLength={3}
                className="w-[5ch] text-center  text-black rounded border-2 border-gray-300 mr-3"
              />
              Add Amount
            </button>
            <button
              className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={resetClick}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
