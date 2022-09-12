import styled from 'styled-components';

export const Container = styled.div`
	gap: 1rem;
	display: grid;
	padding: 1rem;
	grid-template-columns: 1fr 1fr 1fr;

	section {
		border: 0.2rem solid black;
		height: 8rem;
		padding: 1rem;
		width: 15rem;
		margin: 0.2rem 0 1rem 0;
	}

	@media (max-width: 720px) {
		grid-template-columns: repeat(2, 1fr);
		section {
			border: 0.2rem solid black;
			height: 8rem;
			padding: 1rem;
			width: 15rem;
			margin: 0.2rem 0 1rem 0;
		}
	}

	.container-textarea {
		height: 10rem;
		width: 15.5rem;
		padding: 0.1rem;

		textarea {
			height: 7rem;
			width: 15rem;
			resize: none;
			border: 0.2rem solid black;
			padding: 1rem 0.3rem;
			font-weight: 500;
			color: var(--gray);
		}

		button {
			width: 6rem;
			height: 2rem;
			font-weight: 500;
			color: var(--gray);
			border: 0.2rem solid black;
			justify-content: center;
			align-items: center;

			:hover {
				background: var(--green);
			}
		}
	}

	.container-like-heart {
		width: 6rem;
		margin-top: 2rem;
		display: block;
		align-items: center;
		justify-content: center;

		.like-love {
			cursor: pointer;
			height: 0.3rem;
			align-items: center;
			justify-content: center;
			border: none;
		}

		.like-love:target {
			color: blue;
			background-color: aqua;
		}

		strong {
			font-weight: 500;
			margin: 0 0.5rem 0 0.5rem;
		}
	}
`;
