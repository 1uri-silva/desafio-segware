import React, { useState } from 'react';
import { Container, Content, Title } from './styles';
import { useAuth } from '../../hooks/useAuth';

function SigIn(): JSX.Element {
	const { signIn, loadingAuth, errorAuth } = useAuth();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<Title>SigIn</Title>
			<Content>
				<input
					value={username}
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					value={password}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					disabled={loadingAuth}
					onClick={() => signIn(username, password)}
				>
					Login
				</button>
			</Content>
			{errorAuth ?? errorAuth}
		</Container>
	);
}

export { SigIn };
