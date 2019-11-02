import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga , rootReducer} from '../sagas';

export default (preloadedState) => {
	const sagaMiddleware = createSagaMiddleware();
	const enhancers = applyMiddleware(sagaMiddleware)
  const store = createStore(rootReducer, enhancers);
	sagaMiddleware.run(rootSaga);
  
  return store;
};