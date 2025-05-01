import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSongsThunk } from "../store/SearchSongSlice";

function Header() {
  const dispatch = useDispatch();
  const [search, setsearch] = useState();
  const handleSearch = () => {
    dispatch(searchSongsThunk(search));
  };
  return (
    <nav className="w-full fixed top-0 h-auto flex items-center md:px-10 bg-neutral-950">
      <div className="text-white w-1/3">KediMusic</div>
      <div className="w-auto px-3 bg-neutral-800 my-2 rounded-full">
        <input
          type="text"
          className="px-4 py-2 outline-none text-white"
          placeholder="search"
          onChange={(e) => setsearch(e.target.value)}
        />
        <i
          className="ri-search-line text-xl cursor-pointer text-neutral-500"
          onClick={handleSearch}
        ></i>
      </div>
    </nav>
  );
}

export default Header;
