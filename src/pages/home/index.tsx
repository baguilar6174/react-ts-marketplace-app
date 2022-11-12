import React from 'react';
import {
	Button,
	Container,
	Grid,
	Box,
	CircularProgress,
	Pagination,
	Stack,
} from '@mui/material';

import { CustomCard, Header } from '@/components';
import { characters } from '@/data/characters';
import { Character } from './interfaces/character.interface';

export const HomePage: React.FC<{}> = (): JSX.Element => {
	const [page, setPage] = React.useState<number>(1);
	const [totalPages, setTotalPages] = React.useState<number>(0);
	const [results, setResults] = React.useState<Character[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const getCharacters = async (): Promise<void> => {
		try {
			setIsLoading(true);
			const { data } = await characters.getAll({ page });
			const {
				info: { pages },
				results,
			} = data;
			setTotalPages(pages);
			setResults(results);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	const onPageChange = (e: React.ChangeEvent<unknown>, value: number): void => {
		setPage(value);
	};

	React.useEffect((): void => {
		getCharacters();
	}, [page]);

	return (
		<Container maxWidth='lg'>
			<Header
				title='Home'
				description='Welcome'
				element={<Button fullWidth>Press</Button>}
			/>
			{isLoading ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<CircularProgress />
				</Box>
			) : (
				<div>
					{!results.length ? (
						<div>No data</div>
					) : (
						<>
							<Grid sx={{ my: 2 }} container spacing={2} direction='row'>
								{results.map(
									(character): JSX.Element => (
										<Grid item key={character.id} xs={3}>
											<CustomCard
												image={character.image}
												name={character.name}
												species={character.species}
												status={character.status}
												id={character.id}
											/>
										</Grid>
									)
								)}
							</Grid>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<Pagination
									variant='outlined'
									color='primary'
									size='large'
									count={totalPages}
									page={page}
									onChange={onPageChange}
									sx={{ mb: 4 }}
								/>
							</Box>
						</>
					)}
				</div>
			)}
		</Container>
	);
};
