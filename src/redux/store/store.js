import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Reducer 
import reducer from './rootReducer';

// Apply middleware to redux 
const middlewares = [
  logger
];

// hide logger in production
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// Store config
const Store = (initialState) => createStoreWithMiddleware(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default Store();