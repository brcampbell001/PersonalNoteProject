import { ADD_NOTE, DELETE_NOTE, DISPLAY_NOTE, SAVE_NOTE } from './index'

let noteId = 0;

export const addNote = (id) => {
    return {
        type: ADD_NOTE,
        id: noteId++,
        title,
        content,
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}

export const displayNote = (id) => {
    return {
        type: DISPLAY_NOTE,
        id
    }
}

export const saveNote = (id) => {
    return {
        type: SAVE_NOTE,
        id,
        title,
        content,
    }
}