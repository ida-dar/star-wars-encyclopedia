import {connect} from 'react-redux';
import Filters from './Filters';
import {fetchSearchedItem, getSearchedItem} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  item: getSearchedItem(state),
});

const mapDispatchToProps = dispatch => ({
  loadSearchedItem: (input) => dispatch(fetchSearchedItem(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
