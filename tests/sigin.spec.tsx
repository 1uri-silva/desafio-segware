import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';

import { sigInResponse } from '../src/services/data';
import { SigIn } from '../src/pages/sigin';
import { api } from '../src/services/api';

let navigate = jest.fn();
beforeEach(() => {
	jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('[Scree] - SigIn', () => {
	it('should be able to render screen SigIn', () => {
		render(<SigIn />);

		const linkElement = screen.getByText('SigIn');

		expect(linkElement).toBeTruthy();
	});

	it('should be able to type input', () => {
		render(<SigIn />);

		const usernameInput = screen.getByPlaceholderText('Username');

		userEvent.type(usernameInput, 'user');

		expect(usernameInput).toHaveValue('user');
	});

	it("should be able redirects '/' to '/posts'", async () => {
		jest
			.spyOn(api, 'post')
			.mockImplementation(() => sigInResponse('iuri22@', 'iuri22@'));

		render(<SigIn />);

		const sigInButton = screen.getByText('Login');
		const usernameInput = screen.getByPlaceholderText('Username');
		const passwordInput = screen.getByPlaceholderText('Password');

		userEvent.type(usernameInput, 'Iuri Silva');
		userEvent.type(passwordInput, 'iuri22@');
		userEvent.click(sigInButton);

		await waitFor(() => {
			expect(api.post).toHaveBeenCalled();
		});
	});
});
