import { API_URL } from '../config/envVariable';

export const booksEndpoint = `${API_URL}books/all`;

export const bookDetailEndpoint = (id: number) => `${API_URL}books/${id}`;
