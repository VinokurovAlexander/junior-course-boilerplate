import { connect } from 'react-redux';
import ListUI from '../../components/List';
import { getProductsByPrice } from '../../modules/price';
import { getProducts } from '../../modules/products';

const mapStateToProps = state => ({
  productsByPrice: getProductsByPrice(state),
  products: getProducts(state),
})

export default connect(mapStateToProps)(ListUI);
