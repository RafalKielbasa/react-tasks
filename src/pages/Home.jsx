import useFetch from "../hooks/useFetch";

const Home = () => {
  const { home, loading, error } = useFetch({url:"http://localhost:3001/pages"});

  if (loading) {
    return <div>Trwa ładowanie danych...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold pb-2">{home?.title}</h3>
      <h3>{home?.content}</h3>
    </div>
  );
};

export default Home;
