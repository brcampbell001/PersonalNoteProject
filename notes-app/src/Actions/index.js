export const ADD_NOTE = 'ADD_NOTE';
export const FETCHING_NOTEs = 'FETCHING_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT-NOTE';

export const addNote = note => {
    return {
        type: ADD_NOTE,
        payload: note,
    };
}

export const editNote = note => {
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
}