import { Link, Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const About = () => {
  const { data } = useFetch({ url: "http://localhost:3001/usersList" });
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
