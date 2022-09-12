import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { api } from '../src/services/api';
import {
	feedsResponse,
	postRequest,
	reactionRequest,
} from '../src/services/data';
import { Posts } from '../src/pages/posts';
import { Post } from '../src/components/post';

describe('[Screen] - posts', () => {
	beforeEach(() => {
		jest.spyOn(api, 'get').mockImplementation(() => feedsResponse());
	});

	it('should be able to render screen posts', () => {
		render(<Posts />);

		const linkElement = screen.getByPlaceholderText('No que está pensando?');
		expect(linkElement).toBeTruthy();
	});

	it('should be able to type new post', () => {
		render(<Posts />);

		const textAreaNewPost = screen.getByPlaceholderText(
			'No que está pensando?'
		);

		userEvent.type(textAreaNewPost, 'Não sei o que pensando');

		expect(textAreaNewPost).toHaveValue('Não sei o que pensando');
	});

	it('should be able to add new post', () => {
		jest.spyOn(api, 'post').mockImplementation(() => postRequest('test'));
		render(<Posts />);

		const textAreaNewPost = screen.getByPlaceholderText(
			'No que está pensando?'
		);
		const buttonNewPost = screen.getByText('Enviar');

		userEvent.type(textAreaNewPost, 'Não sei o que estou pensando');
		userEvent.click(buttonNewPost);

		expect(buttonNewPost).toBeDisabled();
		expect(api.post).toBeCalled();
	});

	it('should be able to render posts', async () => {
		const data = await feedsResponse();

		render(<Post feed={data} />);

		const findTxt = screen.getAllByText('eu moro no morro e ela na zona sul');
		expect(findTxt[0]).toHaveTextContent('eu moro no morro e ela na zona sul');
	});

	it('should be able to send reaction', async () => {
		const data = await feedsResponse();
		// jest.spyOn(React, 'useCallback').mockImplementation((cb) => cb());
		jest
			.spyOn(api, 'post')
			.mockImplementation(() => reactionRequest(1, true, false));

		render(<Post feed={data} />);

		const sendLike = screen.getByTestId('button-like');
		const sendLove = screen.getByTestId('button-love');
		userEvent.click(sendLike);
		userEvent.click(sendLove);

		expect(api.get).toHaveBeenCalled();
		expect(api.get).toHaveBeenCalled();
	});
});
