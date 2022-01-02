import {connect} from 'react-redux';
import Items from './Items';
import {fetchNextPage, fetchPreviousPage, getAll, getRequests} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  items: getAll(state),
  request: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  nextPage: (items, url) => dispatch(fetchNextPage(items, url)),
  previousPage: (items, url) => dispatch(fetchPreviousPage(items, url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
