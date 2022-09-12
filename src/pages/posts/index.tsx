import React, { useCallback, useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Container } from './style';
import { Post } from '../../components/post';

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

function Posts(): JSX.Element {
	const [newPost, setNewPost] = useState('');
	const [loadingNewPost, setLoadingNewPost] = useState(false);

	const [feeds, setFeeds] = useState<FeedsResponse[]>([]);

	const handleNewPost = useCallback(() => {
		setLoadingNewPost(true);
		api
			.post('feed', {
				content: newPost,
			})
			.then(({ status }) => {
				if (status === 201 || status === 200) {
					setLoadingNewPost(false);
				}
			})
			.catch(() => setLoadingNewPost(false));
	}, [newPost]);

	useEffect(() => {
		api
			.get<FeedsResponse[]>('feeds')
			.then(({ data }) => setFeeds(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<Container>
				<div className="container-textarea">
					<textarea
						cols={30}
						rows={10}
						placeholder="No que está pensando?"
						value={newPost}
						onChange={(e) => setNewPost(e.target.value)}
					/>
					<button disabled={loadingNewPost} onClick={handleNewPost}>
						Enviar
					</button>
				</div>
				<Post feed={feeds} />
			</Container>
		</>
	);
}

export { Posts };
