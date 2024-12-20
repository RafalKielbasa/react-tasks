import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './components/Navigation.jsx';
import UserProfile from './components/UserProfile.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/about',
				element: <About />,
				children: [{ path: ':id', element: <UserProfile /> }],
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
