import { useState, useEffect } from "react";

const useFetch = ({ url, setLoading }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
        }, 3000);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      clearTimeout();
    };
  }, [url]);
  const { home, contact } = data || {};
  return { home, contact, data, error };
};

export default useFetch;
