import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const Starships = ({ starships }) => {

  const category = 'starships';

  return(
    <div className='row'>
      {starships.results.map((props, index) => (
        <ItemSummary key={index} category={category} {...props} />
      ))}
    </div>
  )
}

Starships.propTypes = {
  starships: PropTypes.object,
};

export default Starships;
