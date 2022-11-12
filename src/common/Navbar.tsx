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
import { useAppSelector } from '@/redux/hooks';
import { CartAddState } from '@/redux/slices/cart.slice';

export const Navbar: React.FC<{}> = (): JSX.Element => {
	const navigate = useNavigate();

	const [open, setOpen] = React.useState<boolean>(false);

	const items = useAppSelector((state): CartAddState[] => state.cartReducer);

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
								<Typography>Rick & Morty Market</Typography>
							</Grid>
							<Grid item>
								<Stack direction='row' spacing={2}>
									<IconButton
										color='primary'
										onClick={(): void => handleStateViewDrawer()}
									>
										<Badge color='error' badgeContent={items.length}>
											<ShoppingCartOutlinedIcon />
										</Badge>
									</IconButton>
									<Button
										variant='contained'
										onClick={(): void => navigate('login')}
									>
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
