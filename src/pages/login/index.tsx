import React from 'react';
import {
	Button,
	Container,
	Grid,
	Paper,
	Box,
	Typography,
	TextField,
} from '@mui/material';
import { useForm } from '@/hooks';

export const LoginPage: React.FC<{}> = (): JSX.Element => {
	const { formState, onInputChange } = useForm({
		username: '',
		password: '',
	});

	const onSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<Container maxWidth='sm'>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '100vh' }}
			>
				<Grid item>
					<Paper sx={{ padding: '1.2em', borderRadius: '.5em' }}>
						<Typography variant='h4' sx={{ mt: 1, mb: 1 }}>
							Sign in here
						</Typography>
						<Box component='form' onSubmit={onSubmit}>
							<TextField
								type='text'
								margin='normal'
								fullWidth
								label='Username'
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={onInputChange}
								name='username'
								id='username'
							/>
							<TextField
								type='password'
								margin='normal'
								fullWidth
								label='Password'
								sx={{ mt: 1.5, mb: 1.5 }}
								required
								onChange={onInputChange}
								name='password'
								id='password'
							/>
							<Button
								fullWidth
								type='submit'
								variant='contained'
								sx={{ mt: 1.5, mb: 2 }}
							>
								Sign in
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
