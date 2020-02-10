import { combineReducers } from 'redux-immutable';
import { all } from 'redux-saga/effects';

import authReducer from './auth/reducer';
import profilesReducer from './profiles/reducer';
import sessionsReducer from './sessions/reducer';
import usersReducer from './users/reducer';
import uiReducer from './ui/reducer';

import authSagas from './auth/watchers';
import profilesSagas from './profiles/watchers';
import sessionsSagas from './sessions/watchers';
import storageSagas from './storage/watchers';
import usersSagas from './users/watchers';
import uiSagas from './ui/watchers';

export const rootReducer = combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  sessions: sessionsReducer,
  users: usersReducer,
  ui: uiReducer,
});

export function* rootSaga() {
  yield all([
    ...authSagas,
    ...profilesSagas,
    ...storageSagas,
    ...sessionsSagas,
    ...usersSagas,
    ...uiSagas,
  ]);
}
