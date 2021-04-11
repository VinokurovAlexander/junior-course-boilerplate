import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItemUI from '../../components/ProductItem';
import { isInCart, addToCart, deleteFromCart, getLoadingStatus } from '../../modules/cart';

const mapStateToProps = (state, props) => ({
  isInCart: isInCart(state, props),
  isCartLoading: getLoadingStatus(state),
})

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ addToCart, deleteFromCart }, dispatch);

  return {
    addToCart: id => actions.addToCart(id),
    deleteFromCart: id => actions.deleteFromCart(id)
  }
}

const ProductItem = connect(mapStateToProps, mapDispatchToProps)(ProductItemUI);

export default ProductItem;
