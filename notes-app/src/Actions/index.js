import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';

export const ADD_NOTE = 'ADD_NOTE';

export const SHOW_NOTES = 'SHOW_NOTES';

export const DELETE_NOTE = 'DELETE_NOTE';

export const ERROR = 'ERROR';

const URL = 'http://localhost:8081/api/notes'


export const fetchNotes = (notes) => {
    const servreq = axios.get(`${URL}/`);
    return {
        type: FETCH_NOTES,
        payload: servreq
    };
}

export const addNote = (notes, callback) => {
	const servreq = axios.post(`${URL}/add`, notes).then(() => callback());
	return {
        type: ADD_NOTE,
        payload: servreq,
    }
};

export const showNotes = (id) => {
    const servreq = axios.get(`${URL}/${id}`)
    return {
        type: SHOW_NOTES,
        payload: servreq
    }
}

export const deleteNote = (id, callback) => {
    const servreq = axios.delete(`${URL}/${id}`).then(() => callback());
    return {
        type: DELETE_NOTE,
        payload: id
    }
}