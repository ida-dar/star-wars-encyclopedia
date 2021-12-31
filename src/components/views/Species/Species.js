import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const Species = ({ species }) => {

  const category = 'species';

  return(
    <div className='row'>
      {species.results.map((props, index) => (
        <ItemSummary key={index} category={category} {...props} />
      ))}
    </div>
  )
}

Species.propTypes = {
  species: PropTypes.object,
};

export default Species;
