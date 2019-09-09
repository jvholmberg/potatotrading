import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import localStorage from '../middleware/Storage';
import requests from '../middleware/Requests';
import rootReducer from '../reducers';
import DevTools from '../tools/DevTools';

export default (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(localStorage, requests, createLogger()),
      DevTools.instrument()
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    });
  }
  
  return store;
};