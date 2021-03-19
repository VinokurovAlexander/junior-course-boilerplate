import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import AppUI from '../../components/App';
import { setPage } from '../../modules/pagination';
import { setCategories, getCheckedCategories } from '../../modules/categories';
import { getActivePageIndex } from '../../modules/pagination';

const mapStateToProps = state => ({
    checkedCategories: getCheckedCategories(state),
    activePageIndex: getActivePageIndex(state)
})

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ setPage, setCategories }, dispatch);

  return {
    setPage: page => actions.setPage(page),
    setCheckedCategories: categories => actions.setCategories(categories)
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);

export default App;
