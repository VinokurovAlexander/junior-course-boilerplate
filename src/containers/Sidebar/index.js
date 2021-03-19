import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../../components/Form';
import {
  resetCategories,
  changeCategory,
  getCategories,
  getCheckedCategories
} from '../../modules/categories';
import {
  setPrice,
  getPrice
} from '../../modules/price';

const mapStateToProps = state => ({
  price: getPrice(state),
  categories: getCategories(state),
  checkedCategories: getCheckedCategories(state)
})

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ changeCategory, setPrice, resetCategories }, dispatch);

  return {
    handlePriceChange: (name, value) => actions.setPrice(name, value),
    handleResetFilter: () => actions.resetCategories(),
    handleCategoryChange: category => actions.changeCategory(category)
  }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Sidebar;
