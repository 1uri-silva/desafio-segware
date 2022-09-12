import { GlobalCss, Container } from './globalCss';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

function App(): JSX.Element {
	return (
		<>
			<BrowserRouter>
				<Container>
					<Routes />
				</Container>
			</BrowserRouter>
			<GlobalCss />
		</>
	);
}

export { App };
