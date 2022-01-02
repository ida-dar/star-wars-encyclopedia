import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ItemSummary from '../../features/ItemSummary/ItemSummary';
import Filters from '../../features/Filters/FiltersContainer';

const Items = ({ items }) => {

  const location = useLocation();
  let data;

  const category = location.pathname.replace('/','');

  switch (location.pathname) {
    case '/planets':
      data = items.planets;
      break;
    case '/vehicles':
      data = items.vehicles;
      break;
    case '/starships':
      data = items.starships;
      break;
    case '/films':
      data = items.films;
      break;
    case '/people':
      data = items.people;
      break;
    case '/species':
      data = items.species;
      break;
    default:
      data = {
        next: null,
        previous: null,
        results: []
      };
  }

  return(
    <div className='row'>
      <Filters />
      {data.results.map((props, index) => (
        <ItemSummary key={index} {...props} category={category} />
      ))}
    </div>
  )
}

Items.propTypes = {
  items: PropTypes.object,
};

export default Items;
