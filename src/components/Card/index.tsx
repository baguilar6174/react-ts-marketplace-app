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

type CardProps = {
	image: string;
	name: string;
	species: string;
	status: string;
};

export const CustomCard: React.FC<CardProps> = ({
	image,
	name,
	species,
	status,
}): JSX.Element => {
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
				<Button fullWidth variant='contained' size='small'>
					View more
				</Button>
			</CardActions>
		</Card>
	);
};
