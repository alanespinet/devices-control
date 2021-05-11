import { createStore } from 'redux';
import devicesReducer from './reducers/devices';

const store = createStore( devicesReducer );
export default store;