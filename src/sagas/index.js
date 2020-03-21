import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { reducerName as authReducerName } from './auth/constants';
import { reducerName as profilesReducerName } from './profiles/constants';
import { reducerName as sessionsReducerName } from './sessions/constants';
import { reducerName as settingsReducerName } from './settings/constants';
import { reducerName as uiReducerName } from './ui/constants';
import { reducerName as usersReducerName } from './users/constants';

import authReducer from './auth/reducer';
import profilesReducer from './profiles/reducer';
import sessionsReducer from './sessions/reducer';
import settingsReducer from './settings/reducer';
import uiReducer from './ui/reducer';
import usersReducer from './users/reducer';

import authSagas from './auth/watchers';
import profilesSagas from './profiles/watchers';
import sessionsSagas from './sessions/watchers';
import settingsSagas from './settings/watchers';
import uiSagas from './ui/watchers';
import usersSagas from './users/watchers';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
  [authReducerName]: authReducer,
  [profilesReducerName]: profilesReducer,
  [sessionsReducerName]: sessionsReducer,
  [settingsReducerName]: settingsReducer,
  [uiReducerName]: uiReducer,
  [usersReducerName]: usersReducer,
});

export function* rootSaga() {
  yield all([
    ...authSagas,
    ...profilesSagas,
    ...sessionsSagas,
    ...settingsSagas,
    ...uiSagas,
    ...usersSagas,
  ]);
}
