import {connect} from 'react-redux';
import Planets from './Planets';
import {getAllPlanets} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  planets: getAllPlanets(state),
});

export default connect(mapStateToProps)(Planets);
