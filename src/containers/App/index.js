import { connect }  from 'react-redux';
import AppUI from '../../components/App';
import { RESET_FILTER, UPDATE_CHECKED_CATEGORIES } from '../../reducer';

const mapStateToProps = ({ checkedCategories }) => {
  return {
    checkedCategories
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateCheckedCategories: checkedCategories => dispatch({ type: UPDATE_CHECKED_CATEGORIES, payload: { checkedCategories }}),
    resetFilter: () => dispatch({ type: RESET_FILTER })
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);

export default App;
