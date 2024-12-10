import { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [url]);
  const { home, contact } = data || {};
  return { home, contact, data };
};

export default useFetch;
