import axios from "axios"
import { useEffect, useState } from "react"

// 'https://saavn.dev/api/search/songs?query=Believer'


function useSongSearch(data) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function findmusic() {
      console.log(data);
      const response = await axios.get(`https://saavn.dev/api/search/songs?query=${data}`);
      const SearchResults = response.data.data.results;
      console.log(SearchResults);
      setResults(SearchResults);

    }
    findmusic();

  }, [])
  return results;
}

export default useSongSearch
