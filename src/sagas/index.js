import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import authReducer from './auth/reducer';
import sessionsReducer from './sessions/reducer';
import usersReducer from './users/reducer';
import uiReducer from './ui/reducer';

import authSagas from './auth/watchers';
import sessionsSagas from './sessions/watchers';
import storageSagas from './storage/watchers';
import usersSagas from './users/watchers';
import uiSagas from './ui/watchers';

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  sessions: sessionsReducer,
  ui: uiReducer,
});

export function* rootSaga() {
  yield all([
    ...authSagas,
    ...storageSagas,
    ...sessionsSagas,
    ...usersSagas,
    ...uiSagas,
  ]);
}
