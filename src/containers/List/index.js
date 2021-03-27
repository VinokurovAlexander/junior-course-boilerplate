import { connect } from 'react-redux';
import ListUI from '../../components/List';
import { getProductsByPrice } from '../../modules/price';

const mapStateToProps = state => ({
  productsByPrice: getProductsByPrice(state)
})

export default connect(mapStateToProps)(ListUI);
