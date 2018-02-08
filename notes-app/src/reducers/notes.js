import _ from 'lodash';

import { FETCH_NOTES, SHOW_NOTES, DELETE_NOTE } from '../actions';

export const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_NOTES:
            const data = action.payload.data;
            return {
                ...state,
                [data.id]: data
            };
        case FETCH_NOTES:
            return _.mapKeys(action.payload.data, "id");
        case DELETE_NOTE:
            return _.omit(state, action.payload);

            default:
            return state;
    }
} 

export default notesReducer;
