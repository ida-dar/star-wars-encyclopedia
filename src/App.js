import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';
import Planets from './components/views/Planets/PlanetsContainer';
import People from './components/views/People/PeopleContainer';
import Species from './components/views/Species/SpeciesContainer';
import Vehicles from './components/views/Vehicles/VehiclesContainer';
import Starships from './components/views/Starships/StarshipsContainer';
import Films from './components/views/Films/FilmsContainer';

import { fetchAll } from './redux/globalRedux';

const App = ({loadAll}) => {

  const routes = [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/planets',
      component: <Planets />,
    },
    {
      path: '/people',
      component: <People />,
    },
    {
      path: '/films',
      component: <Films />,
    },
    {
      path: '/vehicles',
      component: <Vehicles />,
    },
    {
      path: '/starships',
      component: <Starships />,
    },
    {
      path: '/species',
      component: <Species />,
    },
  ];

  React.useEffect(() => {
    loadAll();
  });

  return (
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={`${process.env.PUBLIC_URL}${route.path}`} element={route.component} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => ({
  loadAll: () => dispatch(fetchAll()),
});

export default connect(null, mapDispatchToProps)(App);
