import { combineReducers } from 'redux';
import categories from './modules/categories';
import pagination from './modules/pagination';
import price from './modules/price';

const reducerApp = combineReducers({
  categories,
  pagination,
  price,
})

export default reducerApp;
