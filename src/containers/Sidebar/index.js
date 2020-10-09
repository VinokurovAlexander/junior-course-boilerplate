import { connect } from 'react-redux';
import Form from '../../components/Form';
import { CHANGE_PRICE, RESET_FILTER, CHANGE_FILTER } from '../../reducer';

const mapStateToProps = ({ price, categories, checkedCategories }) => {
  return {
    price,
    categories,
    checkedCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePriceChange: (name, value) => dispatch({ type: CHANGE_PRICE , payload: { inputName: name, changedValue: value }}),
    handleResetFilter: () => dispatch({ type: RESET_FILTER }),
    handleCategoryChange: changedCategory => dispatch({ type: CHANGE_FILTER, payload: { changedCategory }})
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Form);

export default App;
