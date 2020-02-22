import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from './sagas';

export const history = createBrowserHistory()

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
