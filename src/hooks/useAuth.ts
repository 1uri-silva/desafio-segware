import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

function useAuth() {
	const [loadingAuth, setLoadingAuth] = useState(false);
	const [errorAuth, setErrorAuth] = useState('');
	const [token, setToken] = useState<string | null>(null);

	const navigation = useNavigate();
	useEffect(() => {
		(() => {
			const storageToken = localStorage.getItem('token');

			if (storageToken) {
				const tokenParsed = JSON.parse(storageToken);

				setToken(tokenParsed);
				api.defaults.headers.common.Authorization = `Bearer ${tokenParsed}`;
				navigation('/posts');
			}
		})();
	}, [navigation]);

	const signIn = useCallback(
		(username: string, password: string) => {
			setLoadingAuth(true);
			api
				.post('sign-in', {
					username,
					password,
				})
				.then(({ data: token }) => {
					setToken(token);

					api.defaults.headers.common.Authorization = `Bearer ${token}`;
					localStorage.setItem('token', JSON.stringify(token));
					setLoadingAuth(false);
					navigation('/posts');
				})
				.catch(() => {
					setErrorAuth('Algo saiu errado no login');
					setLoadingAuth(false);
				});
		},
		[navigation]
	);

	const value = useMemo(
		() => ({
			signIn,
			loadingAuth,
			errorAuth,
			token,
		}),
		[errorAuth, loadingAuth, signIn, token]
	);

	return value;
}

export { useAuth };
