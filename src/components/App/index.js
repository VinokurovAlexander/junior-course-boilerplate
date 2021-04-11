import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { toInt } from 'csssr-school-utils';
import MainPage from '../../containers/MainPage';
import ProductPage from '../../containers/ProductPage';
import { history } from '../../store';
import Page404 from '../../pages/404';

class App extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts();
  }

  renderProductPage = location => {
    const id = toInt(location.pathname);

    return <ProductPage id={id} />
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/'} component={MainPage} />
          <Route
            exact path={'/product/:id(\\d+)'}
            render={({ location }) => this.renderProductPage(location)}
          />
          <Route component={Page404} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default App;

