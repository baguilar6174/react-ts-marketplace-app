import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
	username: yup.string().trim().required('Username is required'),
	password: yup
		.string()
		.trim()
		.required('Password is required')
		.min(4, 'Debe contener al menos 4 caracteres')
		.max(20, 'No puede tener más de 20 caracteres'),
});
