import styled from 'styled-components';

export const Container = styled.div`
	width: 30vw;
	height: 60vh;
	display: flex;
	margin-top: 20vh;
	margin-left: 35vw;
	border: 2px solid gray;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background: var(--background);
`;

export const Title = styled.strong`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	color: var(--title);
	margin-bottom: 2rem;
`;

export const Content = styled.div`
	width: 25vw;
	height: 35vh;
	display: flex;
	padding: 0.7rem;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background: var(--background);

	input {
		width: 23vw;
		padding: 8px;
		height: 2rem;
		color: var(--title);
		font-size: 0.8rem;
		border-radius: 3px;
		margin-bottom: 0.7rem;
		border: 0.1rem solid gray;
		transition-duration: 0.4s;

		:hover {
			border: 0.1rem solid black;
			box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
				0 17px 50px 0 rgba(0, 0, 0, 0.19);
		}
	}

	button {
		width: 23vw;
		height: 2rem;
		border-radius: 3px;
		border: 0.1rem solid gray;
		transition-duration: 0.4s;
		color: var(--title);

		:hover {
			box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
				0 17px 50px 0 rgba(0, 0, 0, 0.19);
			background: var(--green);
			border: 0.1rem solid black;
			border-radius: 3px;
		}
		:disabled {
			background: var(--gray-line);
			border: 0.1rem solid black;
			border-radius: 3px;
			color: var(--gray);
		}
	}
`;
