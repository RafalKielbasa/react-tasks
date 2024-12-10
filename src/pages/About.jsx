import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const About = () => {
  const [loading, setLoading] = useState(false);
  const { data, error } = useFetch({
    url: "http://localhost:3001/usersList",
    setLoading,
  });
  console.log("LOADING", loading);
  if (loading) {
    return <div>Trwa ładowanie danych...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div>About</div>
      <div>
        {data?.map(({ name, id }) => {
          return (
            <Link className="p-4" key={id} to={`${id}`}>
              {name}
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default About;
