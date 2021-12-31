import {connect} from 'react-redux';
import Films from './Films';
import {getAllFilms} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  films: getAllFilms(state),
});

export default connect(mapStateToProps)(Films);
