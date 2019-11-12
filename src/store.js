import { createStore, applyMiddleware } from 'redux';
import composeWithDevTools from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { rootSaga, rootReducer } from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(rootReducer, enhancers);
  sagaMiddleware.run(rootSaga);

  return store;
};
