import axios from 'axios';
import { API_URL } from '../config'

/* SELECTORS */
export const getAll = ({data}) => data;
export const getAllPlanets = ({data}) => data.planets;
export const getAllFilms = ({data}) => data.films;
export const getAllSpecies = ({data}) => data.species;
export const getAllVehicles = ({data}) => data.vehicles;
export const getAllStarships = ({data}) => data.starships;
export const getAllPeople = ({data}) => data.people;
export const getRequests = ({data}) => data.request;

/* action name creator */
const reducerName = 'data';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_ALL = createActionName('LOAD_ALL');
const LOAD_PAGE = createActionName('LOAD_NEXT');

/* action creators */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadAll = payload => ({ payload, type: LOAD_ALL });
export const loadPage = payload => ({ payload, type: LOAD_PAGE });

/* thunk creators */
export const fetchAll = () => {

  return async (dispatch) => {
    dispatch(startRequest({ name: 'LOAD_ALL' }));

    try {
      const res = await axios.get(API_URL);

      const people = await axios.get(`${res.data.people}`);
      const planets = await axios.get(`${res.data.planets}`);
      const films = await axios.get(`${res.data.films}`);
      const species = await axios.get(`${res.data.species}`);
      const vehicles = await axios.get(`${res.data.vehicles}`);
      const starships = await axios.get(`${res.data.starships}`);

      const data = {
        people: people.data,
        planets: planets.data,
        films: films.data,
        species: species.data,
        vehicles: vehicles.data,
        starships: starships.data,
      }

      dispatch(loadAll(data));
      dispatch(endRequest({ name: 'LOAD_ALL' }));

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const fetchPage = (url) => {

  return async (dispatch, getState) => {
    dispatch(startRequest({ name: 'LOAD_PAGE' }));

    const state = getState();

    if(url !== null){
      try {
        const res = await axios.get(url);
        const data = state.data;

        if(url.includes('planets')) data.planets = res.data;
        else if(url.includes('people')) data.people = res.data;
        else if(url.includes('species')) data.species = res.data;
        else if(url.includes('vehicles')) data.vehicles = res.data;
        else if(url.includes('starships')) data.starships = res.data;
        else if(url.includes('films')) data.films = res.data;

        dispatch(loadPage(state.data));
        dispatch(endRequest({ name: 'LOAD_PAGE' }));

      } catch(e) {
        dispatch(errorRequest(e.message));
      }
    };
  }
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOAD_ALL: {
      return {
        ...statePart,
        ...action.payload,
      }
    }
    case LOAD_PAGE: {
      return {
        ...statePart,
        ...action.payload,
      }
    }
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
