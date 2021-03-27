import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducerApp from './reducer';

export const history = createBrowserHistory();

const configureStore = preloadedState =>
  createStore(
    createReducerApp(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );

export default configureStore;
