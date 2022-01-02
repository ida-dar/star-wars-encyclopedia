import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';
import Filters from '../../features/Filters/FiltersContainer';
//import { nextPage } from '../../../utils/pageHandler';
import { useLocation } from 'react-router-dom'

const Planets = ({ planets, loadNextPage }) => {

  const category = 'planets';

  const location = useLocation();
  console.log(location)

  return(
    <div className='row'>
      <Filters />
      <button onClick={() => loadNextPage(planets, planets.next)}>next</button>
      {planets.results.map((props, index) => (
        <ItemSummary key={index} {...props} category={category} />
      ))}
    </div>
  )
}

Planets.propTypes = {
  planets: PropTypes.object,
  loadNextPage: PropTypes.func,
};

export default Planets;
