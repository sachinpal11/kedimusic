import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSongsThunk } from "../store/SearchSongSlice";
import { Link, useNavigate } from "react-router";

function Header() {
  const [search, setsearch] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  return (
    <nav className="w-full pr-5 fixed top-0 h-auto flex items-center sm:py-1 py-1 sm:justify-start md:px-10 bg-neutral-950">
      <Link to={"/"} className=" w-1/3 sm:flex hidden">
        <span className="text-black px-3 p-2 rounded-full bg-white font-bold">
          Kedi Music
        </span>
      </Link>
      <Link
        to={"/"}
        className="text-black font-bold ml-8 mr-5 p-2 rounded-full bg-white sm:hidden flex"
      >
        KM
      </Link>
      <div className="xl:w-[30%] flex items-center w-fit px-3 justify-between bg-neutral-800 my-2 rounded-full">
        <input
          type="text"
          className="px-4 py-2 outline-none w-[80%] xl:w-[94%] text-white"
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
