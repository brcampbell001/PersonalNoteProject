import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';

export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/notes'

export const addNote = (note) => {
	const newNote = axios.post(`${URL}/create`, note);
	return dispatch => {
		dispatch({type: ADDING_NOTE});
		newNote
			.then(({data}) => {
				dispatch({type: ADD_NOTE, payload: data});
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			});
	};
};

export const fetchNotes = () => {
	const notes = axios.get(`${URL}/get`);
	return dispatch => {
		dispatch({type: FETCHING_NOTES});
		notes.then(response => {
			dispatch({type: FETCH_NOTES, payload: response.data});
		})
		.catch(err => {
			dispatch({type: ERROR, payload: err})
		});
	};
};

/* export const editNote = note => {
    return {
        type: EDIT_NOTE,
        payload: note,
    }
}

export const deleteNote = noteId => {
    return {
        type: DELETE_NOTE,
        payload: noteId,
    };
} */