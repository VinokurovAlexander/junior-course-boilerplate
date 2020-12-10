import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from '../../components/Link';
import { setPage } from '../../modules/pagination';

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ setPage }, dispatch);

  return {
    handleLinkClick: index => actions.setPage(index)
  }
}

export default connect(null, mapDispatchToProps)(Link);
