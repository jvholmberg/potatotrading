import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { rootSaga, rootReducer } from './sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const composeEnhancers = composeWithDevTools({

  });
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware),
  ));
  sagaMiddleware.run(rootSaga);
  return store;
};
