import { useParams } from "react-router-dom";
// import users from '../../userMockData';
import useFetch from "../hooks/useFetch";

const UserProfile = () => {
  const { id } = useParams();
  const { data } = useFetch({ url: `http://localhost:3001/users/${id}` });
  // const filteredUsers = data.filter((user) => user.id == id);
  // console.log('user', filteredUsers);

  // if (id !== filteredUsers.id) return <p>Id nie istnieje</p>;
  console.log("ID", id);
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
