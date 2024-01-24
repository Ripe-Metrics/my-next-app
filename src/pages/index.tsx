import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { incremented, amountAdded } from '../components/counter/counter-slice';

type AppProps = {}

type AppState = {
  amount: number;
}

function Home(props: AppProps) {
  // Use the useAppSelector hook to get the current count from the Redux store
  const count = useAppSelector((state) => state.counter.value);

  // Use the useAppDispatch hook to get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // Handle click event for incrementing the count
  function handleClick() {
    dispatch(incremented());
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

  // Render the component
  return (
    <>
         <div className="flex items-center justify-center h-screen">
      <div className="w-400 h-400 border border-black p-8 text-center">
        <h2 className="text-xl font-bold">The Count Is...</h2>
        <h1 className="text-4xl font-bold">{count}</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Increment
        </button>
        <button onClick={handleAmountClick}>
          <input
            type="number"
            onChange={handleChange}
            value={byAmount.amount}
          />
        </button>
      </div>
      </div>
    </>
  );
}

export default Home;






