import React from 'react';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HorizontalCard } from '@/components/HorizontalCard';
import { useAppSelector } from '@/redux/hooks';
import { CartAddState } from '@/redux/slices/cart.slice';
interface CartProps {
	open: boolean;
	handleStateViewDrawer: () => void;
}

export const Cart: React.FC<CartProps> = ({
	open,
	handleStateViewDrawer,
}): JSX.Element => {
	const items = useAppSelector((state): CartAddState[] => state.cartReducer);

	return (
		<Drawer anchor={'right'} open={open}>
			<Box sx={{ width: '25em', p: 2 }}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h5'>Cart</Typography>
					<IconButton
						color='primary'
						onClick={(): void => handleStateViewDrawer()}
					>
						<CloseRoundedIcon />
					</IconButton>
				</Stack>
				<Divider sx={{ my: 1.5 }} />
				{!!items.length &&
					items.map(
						({ id, image, name, info }): JSX.Element => (
							<HorizontalCard
								key={id}
								id={id}
								image={image}
								name={name}
								info={info}
							/>
						)
					)}
			</Box>
		</Drawer>
	);
};
