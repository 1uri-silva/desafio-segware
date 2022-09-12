import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
	isAuth: boolean;
	children: JSX.Element;
};

function PrivateRoute({ isAuth, children }: PrivateRouteProps) {
	return isAuth ? children : <Navigate to="/" />;
}

export { PrivateRoute };
