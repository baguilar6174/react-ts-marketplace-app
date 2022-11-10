import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';

export const RouterLayout: React.FC<{}> = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
