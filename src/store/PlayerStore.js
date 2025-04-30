import { configureStore } from "@reduxjs/toolkit";
import searchSongReducer from "./SearchSongSlice";



export const store = configureStore({
  reducer: searchSongReducer
});