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
import { useFormik } from 'formik';

import { useNotification } from '@/context/notification.context';
import { LoginValidate } from '@/utils';

type LoginType = {
	username: '';
	password: '';
};

const LoginPage: React.FC<{}> = (): JSX.Element => {
	const { getSuccess } = useNotification();

	const formik = useFormik<LoginType>({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: LoginValidate,
		onSubmit: (values: LoginType): void => {
			getSuccess(JSON.stringify(values));
		},
	});

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
						<Box component='form' onSubmit={formik.handleSubmit}>
							<TextField
								type='text'
								margin='normal'
								fullWidth
								label='Username'
								sx={{ mt: 2, mb: 1.5 }}
								name='username'
								id='username'
								value={formik.values.username}
								onChange={formik.handleChange}
								error={
									formik.touched.username && Boolean(formik.errors.username)
								}
								helperText={formik.touched.username && formik.errors.username}
							/>
							<TextField
								type='password'
								margin='normal'
								fullWidth
								label='Password'
								sx={{ mt: 1.5, mb: 1.5 }}
								name='password'
								id='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password && Boolean(formik.errors.password)
								}
								helperText={formik.touched.password && formik.errors.password}
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

export default LoginPage;
