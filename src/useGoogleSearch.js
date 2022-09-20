import { useState, useEffect} from "react";
import API_KEY from "./keys";

const CONTEXT_KEYS = "82d873a1c3b5f4eac";

// THIS IS A HOOK 2:16:48
const  useGoogleSearch = (term)=> {
  const [data, setData] = useState(null);

  // DATA LAYER -> RESPONSIBLE OF GETTING A DATA RESULT
  useEffect(() => {
    const fetchData = async () => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEYS}&q=${term}`
          )
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }

    fetchData();
  }, [term])
  
  return { data }
};
export default useGoogleSearch;
