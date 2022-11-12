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

	return (
		<Card>
			<CardMedia component='img' height='194' image={image} alt={name} />
			<CardContent>
				<Typography variant='h4'>{name}</Typography>
				<Divider sx={{ my: 1.5 }} />
				<Typography>Specie: {species}</Typography>
				<Typography>Status: {status}</Typography>
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
			</CardActions>
		</Card>
	);

	function goToDetails() {
		navigate(`/character/${id}`);
	}
};
