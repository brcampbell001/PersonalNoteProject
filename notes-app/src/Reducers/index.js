import { combineReducers } from 'redux';
import notes from './notes'

const rootReducer = combineReducers({ notes, form: formReducer });

export default rootReducer;