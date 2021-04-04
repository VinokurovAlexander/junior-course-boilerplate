import { connect } from 'react-redux';
import CategoriesUI from '../../components/Categories';
import { getProducts } from '../../modules/products';

const mapStateToProps = state => ({
  products: getProducts(state)
})

const Categories = connect(mapStateToProps)(CategoriesUI);

export default Categories;
