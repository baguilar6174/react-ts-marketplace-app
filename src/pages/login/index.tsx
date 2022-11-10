import React from 'react';
import { Button, Container } from '@mui/material';

export const LoginPage: React.FC<{}> = (): JSX.Element => {
	return (
		<Container sx={{ mt: 9 }} maxWidth='xl'>
			<Button variant='contained'>Login</Button>
		</Container>
	);
};
