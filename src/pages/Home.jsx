// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
// import clsx from 'clsx';

const Home = () => {
  // const [data, setData] = useState([]);
  const { home } = useFetch({url:"http://localhost:3001/pages"});

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold pb-2">{home?.title}</h3>
      <h3>{home?.content}</h3>
    </div>
  );
};

export default Home;
