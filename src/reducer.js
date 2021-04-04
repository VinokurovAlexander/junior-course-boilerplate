import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import price from './modules/price';
import products from './modules/products';

const createReducerApp = history => combineReducers({
  price,
  router: connectRouter(history),
  products
})

export default createReducerApp;
