import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import globalReducer from './globalRedux';
import singleItemReducer from './singleItemRedux';
import filtersReducer from './filtersRedux';

// define initial state and shallow-merge initial data
const initialState = {
  data: {
    planets: {
      results: [],
    },
    films: {
      results: [],
    },
    species: {
      results: [],
    },
    vehicles: {
      results: [],
    },
    people: {
      results: [],
    },
    starships: {
      results: [],
    },
  },
  singleItem: {
    data: {},
  },
  filters: {
    searchPhrase: '',
    searchedItem: [],
  },
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

// define reducers
const reducers = {
  data: globalReducer,
  singleItem: singleItemReducer,
  filters: filtersReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
