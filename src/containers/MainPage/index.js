import { connect } from 'react-redux';
import MainPageUI from '../../pages/MainPage';
import { getLoadingStatus, getResponseStatus, getProducts } from '../../modules/products';

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state),
  responseStatus: getResponseStatus(state),
  products: getProducts(state)
})

const MainPage = connect(mapStateToProps)(MainPageUI);

export default MainPage;
