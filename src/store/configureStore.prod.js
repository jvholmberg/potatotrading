import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (preloadedState) => {
	const sagaMiddleware = createSagaMiddleware();

	const strore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
			sagaMiddleware),
	);

	sagaMiddleware.run(rootSaga);
	
	return StorageEvent;
};

export default configureStore;