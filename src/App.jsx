import React, { useEffect } from "react";
import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Player from "./components/Player";
import { useDispatch, useSelector } from "react-redux";
import { searchSongsThunk } from "./store/SearchSongSlice";
import SearchResults from "./components/SearchResults";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSongsThunk("kuley kuley"));
  }, []);
  return (
    <div className="font-[poppins] bg-neutral-800 w-full h-screen justify-between items-center pt-10 flex flex-col">
      <Header />
      <SearchResults />
      <Player />
    </div>
  );
}

export default App;
