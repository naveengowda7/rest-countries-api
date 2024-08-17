import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useFetch = (url) => {
  const [data, setData] = useLocalStorage(url, null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    if (data !== null) {
      console.log("not fetched from the server")
      setLoading(false);

      return;
    }


    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        console.log("fetched from the server")
        console.log("Fetched the country")
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  console.log(data)

  return { data, loading, error };
};
