import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
