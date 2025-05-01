import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleSong } from "../store/CurrentSong";
import { useParams } from "react-router";
import { searchSongsThunk } from "../store/SearchSongSlice";

function SearchResults() {
  const { search } = useParams();
  const results = useSelector((state) => state.searchsong.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchSongsThunk(search));
  }, [search]);

  const handleCurrentSong = (item) => {
    console.log(item);
    dispatch(toogleSong({ details: item, status: true }));
  };
  return (
    <div className="my-10 h-auto items-center w-full p-5 gap-3 flex flex-col md:flex-wrap">
      {results &&
        results.map((item) => (
          <div
            className="flex rounded-xl items-center text-neutral-400 w-[95%] md:w-[45%] overflow-hidden bg-neutral-900"
            key={item.id}
            onClick={() => handleCurrentSong(item)}
          >
            <img src={item.image[2].url} className="w-20 h-20" alt="" />
            <span className="text-wrap ml-5">{item.name}</span>
          </div>
        ))}

      <footer className="w-full h-[20vh] flex justify-center items-center text-neutral-500">
        Kedi Music
      </footer>
    </div>
  );
}

export default SearchResults;
