import React from 'react';
import PropTypes from 'prop-types';
import ItemSummary from '../../features/ItemSummary/ItemSummary';

const Films = ({ films }) => {

  const category = 'films';

  return(
    <div className='row'>
      {films.results.map((props, index) => (
        <ItemSummary key={index} category={category} {...props} />
      ))}
    </div>
  )
}

Films.propTypes = {
  films: PropTypes.object,
};

export default Films;
