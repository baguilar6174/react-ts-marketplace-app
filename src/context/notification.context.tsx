import React from 'react';
import { AlertColor } from '@mui/material';

import { Notification } from '@/components';

type ContextProps = {
	getError: (message: string) => void;
};

export const NotificationContext = React.createContext<ContextProps | null>(
	null
);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}): JSX.Element => {
	const [message, setMessage] = React.useState<string>('');
	const [open, setOpen] = React.useState<boolean>(false);
	const [severity, setSeverity] = React.useState<AlertColor | undefined>(
		undefined
	);

	const onClose = (): void => {
		setOpen(false);
	};

	const getError = (message: string): void => {
		setSeverity('error');
		setOpen(true);
		setMessage(message);
	};
	const value = { getError };
	return (
		<NotificationContext.Provider value={value}>
			<Notification
				onClose={onClose}
				open={open}
				message={message}
				severity={severity}
			/>
			{children}
		</NotificationContext.Provider>
	);
};

export const useNotification = (): ContextProps => {
	const context = React.useContext(NotificationContext);
	if (!context) throw new Error("There's no context");
	return context;
};
