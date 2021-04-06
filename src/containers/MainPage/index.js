import { connect } from 'react-redux';
import MainPageUI from '../../pages/MainPage';
import { getLoadingStatus, getResponseStatus, getProducts } from '../../modules/products';
import { getProductsByPrice } from '../../modules/price';

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state),
  isErrorInResponse: getResponseStatus(state),
  products: getProducts(state),
  productsByPrice: getProductsByPrice(state)
})

const MainPage = connect(mapStateToProps)(MainPageUI);

export default MainPage;
