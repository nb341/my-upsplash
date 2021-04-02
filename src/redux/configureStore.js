
import { Photos } from './photos';
import { Search } from './search';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos,
            search: Search
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}