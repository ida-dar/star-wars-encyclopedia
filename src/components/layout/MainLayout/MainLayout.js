import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';

const lang = 'en';

const MainLayout = ({children}) => (
  <>
    <Helmet title="Star Wars Encyclopedia" htmlAttributes={{ lang }}>
      <meta name="description" content="Find any public Github repository" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </Helmet>
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
