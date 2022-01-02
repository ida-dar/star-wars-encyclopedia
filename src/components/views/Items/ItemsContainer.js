import {connect} from 'react-redux';
import Items from './Items';
import {getAll} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  items: getAll(state)
});


export default connect(mapStateToProps)(Items);
