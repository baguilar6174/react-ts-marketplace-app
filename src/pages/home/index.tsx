import React from 'react';
import { Button, Container } from '@mui/material';

import { useNotification } from '@/context/notification.context';
import { Header } from '@/components';

export const HomePage: React.FC<{}> = (): JSX.Element => {
	const { getError } = useNotification();

	const onClick = (): void => {
		getError('hello world');
	};

	return (
		<Container maxWidth='xl'>
			<Header
				title='Home'
				description='Welcome'
				element={<Button fullWidth>Press</Button>}
			/>
		</Container>
	);
};
