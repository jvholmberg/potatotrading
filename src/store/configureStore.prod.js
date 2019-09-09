import { createStore, applyMiddleware } from 'redux';
import localStorage from '../middleware/Storage';
import requests from '../middleware/Requests';
import rootReducer from '../reducers';

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(localStorage, requests),
  );

export default configureStore;