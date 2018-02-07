import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import NoteIndex from './components/NoteIndex';
import NewNotes from './components/NewNotes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={NoteIndex} />
                <Route path='/notes/new' component={NewNotes} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

