import React from 'react';
import {
	Box,
	CircularProgress,
	Container,
	Grid,
	Typography,
	Divider,
	Chip,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { Character } from '../home/interfaces/character.interface';
import { characters } from '@/data/characters';

export const CharacterPage: React.FC = (): JSX.Element => {
	const { id } = useParams();
	const [character, setCharacter] = React.useState<Character | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const getCharacter = async (): Promise<void> => {
		try {
			setIsLoading(true);
			const { data } = await characters.findOne({ id });
			setCharacter(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	React.useEffect((): void => {
		getCharacter();
	}, [id]);

	return (
		<Box sx={{ width: '100%' }}>
			<Container maxWidth='xl'>
				{isLoading ? (
					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
						<CircularProgress />
					</Box>
				) : (
					<Grid sx={{ mt: 2 }} container columnSpacing={2}>
						<Grid item xs={7}>
							<Typography variant='h2'>{character!.name} </Typography>
							<Divider />
							<Typography variant='h6'>
								Origin: {character!.origin.name}{' '}
							</Typography>
							<Box sx={{ mt: 2 }}>
								<Chip
									color='primary'
									variant='outlined'
									label={character!.status}
								/>
							</Box>
						</Grid>
						<Grid item xs={5}>
							<img
								src={character!.image}
								alt={character!.name}
								style={{ width: '100%', borderRadius: '.5em' }}
							/>
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	);
};
