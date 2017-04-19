import {createStore, combineReducers} from 'redux';
import reducer1 from '../reducers/reducer1';
import reducer2 from '../reducers/reducer2';

const reducers = combineReducers({
    reducer1: reducer1,
    reducer2: reducer2
});
const Store = createStore(reducers);

export default Store;