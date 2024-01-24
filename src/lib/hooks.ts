// Import necessary functions and types from react-redux and the store
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
// Define a custom hook for accessing the dispatch function with the correct type
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Define a custom hook for accessing the state using the RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;