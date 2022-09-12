import React from 'react';
import { Like as LikeComponent, Heart as HeartComponent } from './style';

type LikeProps = {
	onclick: (...prop: any) => any;
	likes: number;
	liked: boolean;
	hasLiked?: boolean;
};

type HeartProps = {
	onclick: (...prop: any) => any;
	loves: number;
	loved: boolean;
};

function Like({ onclick, likes, liked, hasLiked }: LikeProps): JSX.Element {
	return (
		<>
			<strong>{likes}</strong>

			<span data-testid="button-like" className="like-love" onClick={onclick}>
				<LikeComponent likeactive={liked.toString()} />
			</span>
		</>
	);
}
function Heart({ onclick, loves, loved }: HeartProps): JSX.Element {
	return (
		<>
			<strong>{loves}</strong>
			<span data-testid="button-love" onClick={onclick} className="like-love">
				<HeartComponent lovedactive={loved.toString()} />
			</span>
		</>
	);
}

export { Like, Heart };
