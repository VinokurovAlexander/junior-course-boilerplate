import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../../components/Form';
import {
  setPrice,
  getPrice
} from '../../modules/price';

const mapStateToProps = state => ({
  price: getPrice(state),
})

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ setPrice }, dispatch);

  return {
    handlePriceChange: (name, value) => actions.setPrice(name, value)
  }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Sidebar;
