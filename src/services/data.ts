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

export function sigInResponse(
	username: string,
	password: string
): Promise<string> {
	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			if (username !== password) {
				rejects('error');
			}
			resolve('token');
		}, 2000);
	});
}

export function feedsResponse(): Promise<FeedsResponse[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					activeUserLikedIt: 0,
					activeUserLovedIt: 0,
					author: { id: 3, username: 'string' },
					content: 'eu moro no morro e ela na zona sul',
					id: 35,
					likes: 0,
					loves: 0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			]);
		}, 1000);
	});
}

export function postRequest(content: string): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('');
		}, 1000);
	});
}

export function reactionRequest(
	feedId: number,
	like: boolean,
	love: boolean
): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('');
		}, 1000);
	});
}
