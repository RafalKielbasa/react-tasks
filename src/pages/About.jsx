import { Link, Outlet } from 'react-router-dom';
import users from '../../userMockData';

const About = () => {
	return (
		<div className='flex flex-col items-center'>
			<div>About</div>
			<div>
				{users.map(({ imie, id }) => {
					return (
						<Link
							className='p-4'
							key={id}
							to={`${id}`}
						>
							{imie}
						</Link>
					);
				})}
			</div>
			<Outlet />
		</div>
	);
};

export default About;
