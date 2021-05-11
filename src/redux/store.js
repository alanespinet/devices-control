import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import devicesReducer from './reducers/devices';
import filtersReducer from './reducers/filters';

const store = createStore( combineReducers({
    devicesReducer,
    filtersReducer
 }), applyMiddleware(thunk) );
export default store;