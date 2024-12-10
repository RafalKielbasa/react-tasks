import { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("error", error);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setTimeout(async () => {
          const response = await fetch(url);
          if (!response.ok) {
            setLoading(false);
            setError(`Response status: ${response.status}`);
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
          setLoading(false);
        }, 3000);
      } catch (err) {
        console.error(err.message);
        console.log("Nowy error");
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      clearTimeout();
    };
  }, [url]);
  const { home, contact } = data || {};
  return { home, contact, data, error, loading };
};

export default useFetch;
