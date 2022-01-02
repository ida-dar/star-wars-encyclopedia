import {connect} from 'react-redux';
import ItemView from './ItemView';
import {getOne, fetchOneItem} from '../../../redux/singleItemRedux';

const mapStateToProps = state => ({
  singleItem: getOne(state),
});

const mapDispatchToProps = dispatch => ({
  loadOne: () => dispatch(fetchOneItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
