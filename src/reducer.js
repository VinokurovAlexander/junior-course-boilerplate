import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import price from './modules/price';
import products from './modules/products';
import cart from './modules/cart';

const createReducerApp = history => combineReducers({
  price,
  products,
  cart,
  router: connectRouter(history),
})

export default createReducerApp;
