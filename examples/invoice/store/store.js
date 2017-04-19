import {createStore, combineReducers} from 'redux';
import itemReducer from '../reducer/itemReducer';

const Store = createStore(itemReducer);

export default Store;