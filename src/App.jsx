import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [save, setsave] = useState(null);
  const [search, setSearch] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://saavn.dev/api/search/songs?query=${search}`
      );
      console.log(response.data.data.results[0]);
      console.log(response.data.data.results[0].downloadUrl[4].url);
      const url = response.data.data.results[0].downloadUrl[4].url;
      setsave(url);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <input
        className="border-2 rounded-full px-3 py-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="border-1 m-4 px-4 py-2 rounded-full bg-blue-400"
        onClick={fetchData}
      >
        search
      </button>
      <audio src={save} controls autoPlay></audio>
    </div>
  );
}

export default App;
