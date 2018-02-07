import _ from 'lodash';

import FETCH_NOTES from '../actions';

const initialState = {

}

export const notesReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
} 