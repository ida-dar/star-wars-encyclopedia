import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemView.module.scss';
import { useLocation } from 'react-router-dom';

import Loader from '../../features/Loader/Loader';
import Error from '../../features/Error/Error';

const ItemView = ({ singleItem, loadOne, request }) => {

  const location = useLocation();
  const path = location.pathname.replace('/','');
  const [category, urlName] = path.split('/');

  React.useEffect(() => {
    loadOne(category, urlName);
  }, [loadOne, category, urlName]);

  const {created, edited, title, name, url, ...rest} = singleItem;

  return(
    <div className='container'>
      {request.error && <Error />}
      {request.pending && <Loader />}
      {request.success &&
        <>
          <h3 className={styles.title}>{title || name}</h3>
          {Object.entries(rest).map(([key, value]) => {
            const cap = key.charAt(0).toUpperCase() + key.slice(1);
            const cleanKey = cap.replace('_', ' ');

            return(
              <div key={key} className={styles.detail}>
                <h5 className={styles.key}>{cleanKey}:</h5>
                {Array.isArray(value) ?
                <ul className={styles.list}>
                  {value.map((item, index) => (
                    <li key={index}><i className='fab fa-galactic-republic' />{item}</li>
                  ))}
                </ul> :
                <p className={styles.value}>{value}</p>}
              </div>
            )
          })}
        </>
      }
    </div>
  )
}

ItemView.propTypes = {
  singleItem: PropTypes.object,
  loadOne: PropTypes.func,
  request: PropTypes.object,
};

export default ItemView;
