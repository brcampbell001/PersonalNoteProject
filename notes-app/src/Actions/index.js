import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
// export const ROOT_URL = 'ROOT_URL';
// export const API_KEY = 'API_KEY';

export const fetchNotes = props => {
//    const request = axios.get(`${ROOT_URL}/notes${API_KEY}`);
    return {
        type: FETCH_NOTES,
        payload: request,
    };
}

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