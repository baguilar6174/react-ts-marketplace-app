import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './routes/Router';

function App(): JSX.Element {
	return (
		<NotificationProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</NotificationProvider>
	);
}

export default App;
