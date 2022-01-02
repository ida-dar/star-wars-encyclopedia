import {connect} from 'react-redux';
import ItemView from './ItemView';
import {getOne, fetchOneItem, getRequests} from '../../../redux/singleItemRedux';

const mapStateToProps = state => ({
  singleItem: getOne(state),
  request: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  loadOne: (category, name) => dispatch(fetchOneItem(category, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
