import {connect} from 'react-redux';
import Planets from './Planets';
import {fetchNextPage, getAllPlanets} from '../../../redux/globalRedux';

const mapStateToProps = state => ({
  planets: getAllPlanets(state),
});

const mapDispatchToProps = dispatch => ({
  loadNextPage: (items, url) => dispatch(fetchNextPage(items, url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
