import { configureStore } from "@reduxjs/toolkit";
import searchSongReducer from "./SearchSongSlice";
import currentSongReducer from "./CurrentSong"


export const store = configureStore({
  reducer: {
    searchsong: searchSongReducer,
    currentsong: currentSongReducer
  }
});