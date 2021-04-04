import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppUI from '../../components/App';
import { fetchProducts } from '../../modules/products';

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ fetchProducts }, dispatch);

  return {
    fetchProducts: () => actions.fetchProducts()
  }
}

const App = connect(null, mapDispatchToProps)(AppUI);

export default App;
