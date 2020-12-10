import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './containers/App';
import { GlobalStyle } from './style';

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><GlobalStyle /><App /></Provider> , rootElement);
