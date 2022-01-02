import {connect} from 'react-redux';
import Items from './Items';
import {fetchPage, getAll, getRequests} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  items: getAll(state),
  request: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  loadPage: (items, url) => dispatch(fetchPage(items, url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
