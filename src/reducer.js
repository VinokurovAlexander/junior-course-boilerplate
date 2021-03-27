import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import price from './modules/price';

const createReducerApp = history => combineReducers({
  price,
  router: connectRouter(history)
})

export default createReducerApp;
