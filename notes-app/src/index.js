import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import NoteIndex from './components/NoteIndex';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={NoteIndex} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

