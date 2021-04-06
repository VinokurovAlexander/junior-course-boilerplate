import { connect } from 'react-redux';
import ProductPageUI from '../../pages/ProductPage';
import { getLoadingStatus, getProductById, getResponseStatus } from '../../modules/products';

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props),
  isLoading: getLoadingStatus(state),
  isErrorInResponse: getResponseStatus(state)
})

const ProductPage = connect(mapStateToProps)(ProductPageUI);

export default ProductPage;
