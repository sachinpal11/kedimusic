import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const searchSongsThunk = createAsyncThunk("songSearchThunk"
  , async (data) => {
    const response = await axios.get(`https://saavn.dev/api/search/songs?query=${data}`);

    let newData = [];
    const SearchResults = () => {
      for (var i = 0; i < 3; i++) {
        newData.push(response.data.data.results[i]);
      }
    }
    SearchResults();
    console.log(newData);
    return newData;
  }
)



const searchSongSlice = createSlice({
  name: "searchSong",
  initialState: {
    results: [],
    status: "idle",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(searchSongsThunk.pending, (state) => {
      console.log("pending...")
      state.status = "pending";
    })
      .addCase(searchSongsThunk.fulfilled, (state, action) => {
        console.log("success")
        state.results = action.payload;
        state.status = "success"
      })
      .addCase(searchSongsThunk.rejected, (state) => {
        state.status = "error"

      })
  }
})


export default searchSongSlice.reducer;
