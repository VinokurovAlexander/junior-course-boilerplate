import { createStore } from 'redux';
import reducerApp from './reducer';

const store = createStore(reducerApp);

export default store;
