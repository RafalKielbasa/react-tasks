import { useParams } from "react-router-dom";
// import users from '../../userMockData';
import useFetch from "../hooks/useFetch";


const UserProfile = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch({ url: `http://localhost:3001/users/${id}` });

  if (loading) {
    return <div className="mt-10">Trwa ładowanie danych...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="py-8">
        <p>Imię: {data.name}</p>
        <p>Nick: {data.username}</p>
        <p>Wiek: {data.age}</p>
        <p>Email: {data.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
