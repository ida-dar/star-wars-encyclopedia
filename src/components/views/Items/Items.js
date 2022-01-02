import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styles from './Items.module.scss';

import ItemSummary from '../../features/ItemSummary/ItemSummary';
import Filters from '../../features/Filters/FiltersContainer';
import Loader from '../../features/Loader/Loader';
import Error from '../../features/Error/Error';
import Button from '../../common/Button/Button';

const Items = ({ items, nextPage, previousPage, request }) => {

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

  const pages = Math.ceil(data.count / data.results.length);

  return(
    <div>
      {request.error === true && <Error />}
      {request.pending === true && <Loader />}
      {request.success === true &&
      <>
        <Filters />
        <div className={styles.pageContainer}>
          <p className={styles.pages}>Number of pages: {pages}</p>
          {(data.next !== null) && <p className={styles.pages}>Current page: {parseInt(data.next.charAt(data.next.length-1)) - 1}</p>}
          <div className={styles.buttonContainer}>
            {(data.previous !== null) && <Button onClick={() => previousPage(data.previous)} variant='blue'>Previous page</Button>}
            {(data.next !== null) && <Button onClick={() => nextPage(data.next)} variant='blue'>Next page</Button>}
          </div>
        </div>
      </>
      }
      <div className='row'>
        {data.results.map((props, index) => (
          <ItemSummary key={index} {...props} category={category} />
        ))}
      </div>
    </div>
  )
}

Items.propTypes = {
  items: PropTypes.object,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  request: PropTypes.object,
};

export default Items;
