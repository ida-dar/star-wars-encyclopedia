import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './ItemSummary.module.scss';

const ItemSummary = ({category, ...props}) => {


  return(
    <div className={`col-lg-3 col-md-6 col-sm-12`}>
      <Link to={`/${category}/${props.name ? props.name.replaceAll(' ', '-') : props.title.replaceAll(' ', '-')}`} className={styles.component}>
        <h4 className={styles.name}>{props.name || props.title}</h4>
        {props.films ?
          <>
            <h5>Appearance in:</h5>
            <ul>
              {props.films.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </> :
          <>
            <p><strong>Director:</strong> {props.director}</p>
            <p><strong>Producers:</strong> {props.producer}</p>
            <p><strong>Release date:</strong> {props.release_date}</p>
          </>
        }
      </Link>
    </div>
  );
};

ItemSummary.propTypes = {
  props: PropTypes.object,
  category: PropTypes.string,
};

export default ItemSummary;
