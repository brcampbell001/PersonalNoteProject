import { ADD_NOTE, DELETE_NOTE, DISPLAY_NOTE, SAVE_NOTE } from '../Actions/index'

const initialState = {
    
    notes: [
        {
            id: 1,
            title: 'Title Initial 1',
            content: 'Content Initial 1',
            isActive: true
        },
        {
            id: 2,
            title: 'Title Initial 2',
            content: 'Content Initial 2',
            isActive: false
        }
    ],

    cnote : {}
}

const note = (state={}, action) => {
    switch(action.type) {
        case ADD_NOTE:
        return Object.assign({}, state, {
            id: action.id,
            title: action.title,
            content: action.content
        })

        default:
        return state
    }
}

const notes = (state=[], action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, note({}, action)]
        case SAVE_NOTE:
            return [...state, note({}, action)]
        default:
            return state
    }
}

const notesApp = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {
                notes: notes(state.notes, action)
            })
            case DISPLAY_NOTE:
            const_notes = state.notes.map((item) => {
                if (item.id === action.id) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
                return item;
            })
            return Object.assign({}, state, {
                notes: _notes,
                cnote: state.notes.filter(item => item.id === action.id)[0]
            })
            case DELETE_NOTE:
                return state.map(item => item.id !== action.id)
            case SAVE_NOTE:
                return Object.assign({}, state, {
                    notes: notes(state.notes, action)
                })
                default:
                    return state;
    }
}

export default notesApp;