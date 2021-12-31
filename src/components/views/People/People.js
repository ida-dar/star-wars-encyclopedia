import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const People = ({ people }) => {

  const category = 'people';

  return(
    <div className='row'>
      {people.results.map((props, index) => (
        <ItemSummary key={index} category={category} {...props} />
      ))}
    </div>
  )
}

People.propTypes = {
  people: PropTypes.object,
};

export default People;
