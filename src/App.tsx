import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './routes/Router';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
