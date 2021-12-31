import {connect} from 'react-redux';
import Species from './Species';
import {getAllSpecies} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  species: getAllSpecies(state),
});

export default connect(mapStateToProps)(Species);
