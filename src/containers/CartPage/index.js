import { connect } from 'react-redux';
import CartPageUI from '../../pages/CartPage';
import { getItemsById } from '../../modules/cart';

const mapStateToProps = state => ({
  items: getItemsById(state)
})

const CartPage = connect(mapStateToProps)(CartPageUI);

export default CartPage;
