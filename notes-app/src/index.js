import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
//import thunk from 'redux-thunk';
import NoteIndex from './components/NoteIndex';
import NewNotes from './components/NewNotes';
import ShowNotes from './components/ShowNotes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={NoteIndex} />
                <Route path='/notes/new' component={NewNotes} />
                <Route path='/notes/:id' component={ShowNotes} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

