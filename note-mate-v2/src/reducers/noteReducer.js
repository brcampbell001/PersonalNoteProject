import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
        return [
            ...state,
            Object.assign({}, action.note)
        ];
        default:
            return state;
    }
}