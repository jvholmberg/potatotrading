import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootSaga , rootReducer} from '../sagas';

export default (preloadedState) => {
	const sagaMiddleware = createSagaMiddleware();
	const enhancers = composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	);

  const store = createStore(rootReducer, enhancers);
	sagaMiddleware.run(rootSaga);
  
  return store;
};