import * as actionTypes from './actionTypes';

export const addNote = (note) => {
    return {
        type: actionTypes.ADD_NOTE,
        note: note
    }
};

export const deleteNote = (id) => {
    return {
        type: actionTypes.DELETE_NOTE,
        id: id
    }
};

export const editNote = (note) => {
    return {
        type: actionTypes.EDIT_NOTE,
        note: note
    }
};