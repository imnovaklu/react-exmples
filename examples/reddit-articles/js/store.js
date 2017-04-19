import {createStore} from 'Redux';
import reducer from './reducer';

const Store = createStore(reducer);
export default Store;