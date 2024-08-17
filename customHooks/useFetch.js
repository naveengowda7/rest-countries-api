export const useFetch = (url) => {
  const [data, setData] = useLocalStorage(url, null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data !== null) {
      console.log("Data retrieved from localStorage");
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
        console.log("Data fetched from the server");
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
