import {connect} from 'react-redux';
import Vehicles from './Vehicles';
import {getAllVehicles} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  vehicles: getAllVehicles(state),
});

export default connect(mapStateToProps)(Vehicles);
