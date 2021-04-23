import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartUI from '../../components/Cart';
import {
  getItemsCount,
  getItems,
  getLoadingStatus,
  getSavedStatus,
  saveCart,
  clearCart,
  getErrorStatus,
  getItemsCoast
} from '../../modules/cart';

const mapStateToProps = state => ({
  value: getItemsCount(state),
  items: getItems(state),
  isLoading: getLoadingStatus(state),
  isSaved: getSavedStatus(state),
  isError: getErrorStatus(state),
  itemsCoast: getItemsCoast(state)
})

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ saveCart, clearCart }, dispatch)

  return {
    saveCart: items => actions.saveCart(items),
    clearCart: () => actions.clearCart()
  }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUI);

export default Cart;
