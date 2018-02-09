import * as actionTypes from './actionTypes';

export const addNote = (note) => {
    return {
        type: actionTypes.ADD_NOTE,
        note: note
    }
};