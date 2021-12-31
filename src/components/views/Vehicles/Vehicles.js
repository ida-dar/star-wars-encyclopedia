import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const Vehicles = ({ vehicles }) => {

  const category = 'vehicles';

  return(
    <div className='row'>
      {vehicles.results.map((props, index) => (
        <ItemSummary key={index} category={category} {...props} />
      ))}
    </div>
  )
}

Vehicles.propTypes = {
  vehicles: PropTypes.object,
};

export default Vehicles;
