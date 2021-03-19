import { connect } from 'react-redux';
import ListUI from '../../components/List';
import { getProductsByPage, getActivePageIndex } from '../../modules/pagination';

const mapStateToProps = state => ({
    activePageIndex: getActivePageIndex(state),
    productsByPage: getProductsByPage(state),
})

export default connect(mapStateToProps)(ListUI);
