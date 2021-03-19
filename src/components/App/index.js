import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage';
import { history } from '../../store';

const App = () => (
  <ConnectedRouter history={history}>
    <Route exact path={'/'} component={MainPage} />
    <Route path={'/id=:number(\\d+)'} component={ProductPage} />
  </ConnectedRouter>
)

export default App;

