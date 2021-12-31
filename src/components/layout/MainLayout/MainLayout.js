import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => (
  <>
    <Header />
    <main className={styles.main}>
      <div className='container'>
        {children}
      </div>
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
