import {connect} from 'react-redux';
import People from './People';
import {getAllPeople} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  people: getAllPeople(state),
});

export default connect(mapStateToProps)(People);
