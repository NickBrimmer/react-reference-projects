import { post, get } from './request';

export const postNote = note => post('/api/v1/notes', note);
export const getNotesFromApi = () => get('/api/v1/notes');
