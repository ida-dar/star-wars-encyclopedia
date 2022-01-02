import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';

const HomePage = () => {

  return(
    <div className={`row justify-content-center align-content-start ${styles.text}`}>
      <h1 className={styles.title}>Welcome to Star Wars Encyclopedia</h1>
      <h3 className={styles.subtitle}>May the force be with you</h3>
      <p>This website is a SWAPI-based (Star Wars API) online encyclopedia that contains detailed information about the Star Wars universe, including movies, characters, species, planets, vehicles and starships.</p>
    </div>
  )
}

// HomePage.propTypes = {};

export default HomePage;
