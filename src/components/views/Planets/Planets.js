import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const Planets = ({ planets }) => {

  const category = 'planets';

  return(
    <div className='row'>
      {planets.results.map((props, index) => (
        <ItemSummary key={index} {...props} category={category} />
      ))}
    </div>
  )
}

Planets.propTypes = {
  planets: PropTypes.object,
};

export default Planets;
