import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
        return [
            ...state,
            Object.assign({}, action.note)
        ];

        case actionTypes.DELETE_NOTE:
        return state.filter((data, i) => i !== action.id);
        
        default:
            return state;
    }
}