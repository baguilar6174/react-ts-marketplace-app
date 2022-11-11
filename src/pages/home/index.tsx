import React from 'react';
import { Button, Container } from '@mui/material';

import { useNotification } from '@/context/notification.context';

export const HomePage: React.FC<{}> = (): JSX.Element => {
	const { getError } = useNotification();

	const onClick = (): void => {
		getError('hello world');
	};

	return (
		<Container sx={{ mt: 9 }} maxWidth='xl'>
			<Button variant='contained' onClick={onClick}>
				Home
			</Button>
		</Container>
	);
};
