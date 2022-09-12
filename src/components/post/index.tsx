import React, { useCallback } from 'react';

import { api } from '../../services/api';
import { Heart, Like } from '../../components/upvote';

type Author = {
	id: number;
	username: string;
};

type FeedsResponse = {
	id: number;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	likes: number;
	loves: number;
	activeUserLikedIt: number;
	activeUserLovedIt: number;
	author: Author;
};

type PostsProp = {
	feed: FeedsResponse[];
};

function Post({ feed }: PostsProp): JSX.Element {
	const handleLikePost = useCallback(
		(feedId: number, like: boolean, love: boolean) => {
			api.post('reaction', {
				feedId,
				like,
				love,
			});
		},
		[]
	);

	return (
		<>
			{feed.map(
				({
					content,
					id,
					likes,
					loves,
					activeUserLikedIt,
					activeUserLovedIt,
					author: { username },
				}) => (
					<section key={id.toString()}>
						<span>{username}</span> <br />
						<span>{content}</span>
						<div className="container-like-heart">
							<Like
								liked={!!activeUserLikedIt}
								likes={likes}
								onclick={() =>
									handleLikePost(id, !activeUserLikedIt, !!activeUserLovedIt)
								}
							/>
							<Heart
								loved={!!activeUserLovedIt}
								loves={loves}
								onclick={() =>
									handleLikePost(id, !!activeUserLikedIt, !activeUserLovedIt)
								}
							/>
						</div>
					</section>
				)
			)}
		</>
	);
}

export { Post };
