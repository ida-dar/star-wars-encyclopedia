import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';
// import Planets from './components/views/Planets/PlanetsContainer';
// import People from './components/views/People/PeopleContainer';
// import Species from './components/views/Species/SpeciesContainer';
// import Vehicles from './components/views/Vehicles/VehiclesContainer';
// import Starships from './components/views/Starships/StarshipsContainer';
// import Films from './components/views/Films/FilmsContainer';
import ItemView from './components/views/ItemView/ItemViewContainer';
import Items from './components/views/Items/ItemsContainer'

import { fetchAll } from './redux/globalRedux';

const App = ({loadAll}) => {

  const routes = [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/planets',
      component: <Items />,
    },
    {
      path: '/planets/:name',
      component: <ItemView />,
    },
    {
      path: '/people',
      component: <Items />,
    },
    {
      path: '/people/:name',
      component: <ItemView />,
    },
    {
      path: '/films',
      component: <Items />,
    },
    {
      path: '/films/:title',
      component: <ItemView />,
    },
    {
      path: '/vehicles',
      component: <Items />,
    },
    {
      path: '/vehicles/:name',
      component: <ItemView />,
    },
    {
      path: '/starships',
      component: <Items />,
    },
    {
      path: '/starships/:name',
      component: <ItemView />,
    },
    {
      path: '/species',
      component: <Items />,
    },
    {
      path: '/species/:name',
      component: <ItemView />,
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
