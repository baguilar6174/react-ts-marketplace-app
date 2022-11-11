import React from 'react';
import { Snackbar, Alert, AlertColor, Typography } from '@mui/material';

type NotificationProps = {
	open: boolean;
	message: string;
	severity: AlertColor | undefined;
	onClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
	open,
	message,
	severity,
	onClose,
}): JSX.Element => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			autoHideDuration={4000}
			open={open}
			onClose={onClose}
		>
			<Alert onClose={onClose} severity={severity}>
				<Typography>{message}</Typography>
			</Alert>
		</Snackbar>
	);
};
