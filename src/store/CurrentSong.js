import { createSlice } from "@reduxjs/toolkit";



const currentSongDetails = createSlice({
  name: "currentSong",
  initialState: {
    details: [],
    status: false
  },
  reducers: {
    toogleSong: (state, action) => {
      console.log("hello")
      console.log(action.payload);
      state.details = action.payload.details;
      state.status = action.payload.status;
    }
  }
})


export default currentSongDetails.reducer;
export const { toogleSong } = currentSongDetails.actions;