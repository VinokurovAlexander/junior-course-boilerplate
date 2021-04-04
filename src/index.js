import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './containers/App';
import { GlobalStyle } from './style';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><GlobalStyle /><App /></Provider> , rootElement);
