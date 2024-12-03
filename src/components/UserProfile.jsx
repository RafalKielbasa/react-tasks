import { useParams } from 'react-router-dom';
import users from '../../userMockData';

const UserProfile = () => {
	const { id } = useParams();
	const filteredUsers = users.filter((user) => user.id == id);
	console.log('user', filteredUsers);

	if (id !== filteredUsers.id) return <p>Id nie istnieje</p>;

	return (
		<div>
			{filteredUsers.map(({ imie, nazwisko, opis, hobby }) => {
				return (
					<div
						key={imie}
						className='py-8'
					>
						<p>Imię: {imie}</p>
						<p>Nazwisko: {nazwisko}</p>
						<p>Opis: {opis}</p>
						<p>Hobby: {hobby}</p>
					</div>
				);
			})}
		</div>
	);
};

export default UserProfile;
