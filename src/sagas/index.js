import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import authReducer from './auth/reducer';
import sessionsReducer from './sessions/reducer';
import usersReducer from './users/reducer';

import authSagas from './auth/watchers';
import sessionsSagas from './sessions/watchers';
import storageSagas from './storage/watchers';
import usersSagas from './users/watchers';

export const rootReducer = combineReducers({
	auth: authReducer,
	users: usersReducer,
	sessions: sessionsReducer,
});

export function* rootSaga() {
  yield all([
		...authSagas,
		...storageSagas,
		...sessionsSagas,
		...usersSagas,
	]);
};