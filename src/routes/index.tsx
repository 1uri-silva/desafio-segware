import { Routes as Switch, Route } from 'react-router-dom';

import { SigIn } from '../pages/sigin';
import { Posts } from '../pages/posts';
import { PrivateRoute } from './privateRoute';
import { useAuth } from '../hooks/useAuth';

function Routes() {
	const { token } = useAuth();

	return (
		<Switch>
			<Route path="/" element={<SigIn />} />

			<Route
				path="/posts"
				element={
					<PrivateRoute isAuth={!!token}>
						<Posts />
					</PrivateRoute>
				}
			/>
		</Switch>
	);
}

export { Routes };
