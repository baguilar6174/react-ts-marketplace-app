import React from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	Container,
	Grid,
	Button,
	Typography,
	Stack,
	IconButton,
	Badge,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { Cart } from './Cart';

export const Navbar: React.FC<{}> = (): JSX.Element => {
	const navigate = useNavigate();

	const [open, setOpen] = React.useState<boolean>(false);

	const handleStateViewDrawer = (): void => {
		setOpen((state): boolean => !state);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='sticky'>
				<Toolbar>
					<Container maxWidth='xl'>
						<Grid
							container
							direction='row'
							justifyContent='space-between'
							alignItems='center'
						>
							<Grid item>
								<Typography>Rick y Morty Marketplace</Typography>
							</Grid>
							<Grid item>
								<Stack direction='row' spacing={2}>
									<IconButton
										color='primary'
										onClick={(): void => handleStateViewDrawer()}
									>
										<Badge color='error' badgeContent={1}>
											<ShoppingCartOutlinedIcon />
										</Badge>
									</IconButton>
									<Button variant='contained' onClick={() => navigate('login')}>
										Login
									</Button>
									<Button variant='outlined'>Register</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
			<Cart open={open} handleStateViewDrawer={handleStateViewDrawer} />
		</Box>
	);
};
