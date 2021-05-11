import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devicesReducer from './reducers/devices';

const store = createStore( devicesReducer, applyMiddleware(thunk) );
export default store;