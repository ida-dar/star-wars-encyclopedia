import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemView.module.scss';

const ItemView = ({ singleItem, loadOne }) => {

  React.useEffect(() => {
    loadOne();
  }, [loadOne]);

  const {created, edited, title, name, url, ...rest} = singleItem

  return(
    <div>
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
    </div>
  )
}

ItemView.propTypes = {
  singleItem: PropTypes.object,
  loadOne: PropTypes.func,
};

export default ItemView;
