import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function SearchResults() {
  const results = useSelector((state) => state.results);
  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <div className="my-10 h-auto items-center w-full p-5 gap-3 flex flex-col md:flex-wrap">
      {results.length > 0 &&
        results.map((item) => (
          <div
            className="flex rounded-xl items-center text-neutral-400 w-[80%] md:w-[45%] overflow-hidden bg-neutral-900"
            key={item.id}
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
