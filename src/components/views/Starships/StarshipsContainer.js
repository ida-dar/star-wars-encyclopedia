import {connect} from 'react-redux';
import Starships from './Starships';
import {getAllStarships} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  starships: getAllStarships(state),
});

export default connect(mapStateToProps)(Starships);
