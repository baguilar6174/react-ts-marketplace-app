import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, CartAddState } from '@/redux/slices/cart.slice';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type CardProps = {
	image: string;
	name: string;
	species: string;
	status: string;
	id: number;
};

export const CustomCard: React.FC<CardProps> = ({
	image,
	name,
	species,
	status,
	id,
}): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);

	const cartItems = useAppSelector(
		(state): CartAddState[] => state.cartReducer
	);

	React.useEffect((): void => {
		setDisabledBtn(cartItems.some((item): boolean => item.id === id));
	}, [cartItems, id]);

	return (
		<Card>
			<CardMedia component='img' height='194' image={image} alt={name} />
			<CardContent>
				<Typography variant='h4' sx={{ mb: 1.5 }}>
					{name}
				</Typography>
				<Divider sx={{ my: 1.5 }} />
				<Typography sx={{ mt: 1.5 }}>Specie: {species}</Typography>
				<Typography sx={{ mt: 1.5 }}>Status: {status}</Typography>
			</CardContent>
			<CardActions>
				<Button
					fullWidth
					variant='contained'
					size='small'
					onClick={goToDetails}
				>
					View more
				</Button>
				<Button
					fullWidth
					variant='outlined'
					size='small'
					disabled={disabledBtn}
					onClick={handleAddToCart}
				>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);

	function goToDetails(): void {
		navigate(`/character/${id}`);
	}

	function handleAddToCart(): void {
		dispatch(
			addToCart({
				id,
				name,
				image,
				info: status,
			})
		);
	}
};
