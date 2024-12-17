import { Outlet } from "react-router-dom";
import StyledNavLink from "../components/StyledNavLink";
import useFetch from "../hooks/useFetch";

const About = () => {
  const { data, error, loading } = useFetch({
    url: "http://localhost:3001/usersList",
  });

  if (loading) {
    return <div>Trwa ładowanie danych...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        {data?.map(({ name, id }) => {
          return (
            <StyledNavLink
              variant="secondary"
              key={id}
              name={name}
              adress={`${id}`}
            />
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default About;
