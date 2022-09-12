import styled, { css } from 'styled-components';
import { FaHeart, FaThumbsUp as FaLike } from 'react-icons/fa';

type PropsLikeStyle = {
	likeactive: string;
};

type PropsHeartStyle = {
	lovedactive: string;
};

export const Like = styled(FaLike)<PropsLikeStyle>`
	${(props) =>
		props.likeactive === 'true'
			? css`
					color: var(--blue);
			  `
			: css`
					color: var(--gray);
			  `};

	:hover {
		cursor: pointer;
	}
`;

export const Heart = styled(FaHeart)<PropsHeartStyle>`
	${(props) =>
		props.lovedactive === 'true'
			? css`
					color: var(--red);
			  `
			: css`
					color: var(--gray);
			  `};

	:hover {
		cursor: pointer;
	}
`;
