import axios from 'axios';

/* SELECTORS */
export const getAll = ({data}) => data;
export const getAllPlanets = ({data}) => data.planets;
export const getAllFilms = ({data}) => data.films;
export const getAllSpecies = ({data}) => data.species;
export const getAllVehicles = ({data}) => data.vehicles;
export const getAllStarships = ({data}) => data.starships;
export const getAllPeople = ({data}) => data.people;

/* action name creator */
const reducerName = 'data';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_ALL = createActionName('LOAD_ALL');

/* action creators */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadAll = payload => ({ payload, type: LOAD_ALL });

/* thunk creators */
export const fetchAll = () => {

  return async (dispatch) => {
    dispatch(startRequest());

    try {
      const res = await axios.get(`https://swapi.dev/api/`);

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

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOAD_ALL: {
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
