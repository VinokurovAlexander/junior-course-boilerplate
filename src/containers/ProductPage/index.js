import { connect } from 'react-redux';
import ProductPageUI from '../../pages/ProductPage';
import { getProducts } from '../../modules/products';

const mapStateToProps = state => ({
  products: getProducts(state)
})

const ProductPage = connect(mapStateToProps)(ProductPageUI);

export default ProductPage;
