import React, { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const {
			target: { name, value },
		} = event;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = (): void => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
