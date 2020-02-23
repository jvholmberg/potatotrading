import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import history from './utils/history';
import { rootSaga, rootReducer } from './sagas';

export default preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), sagaMiddleware];
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
