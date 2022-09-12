import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://segware-book-api.segware.io/api/',
});
