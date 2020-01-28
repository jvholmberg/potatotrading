import { takeLatest } from 'redux-saga/effects';

import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';
import {
  workerCreateSession, workerGetSessions, workerGetSessionTypes,
} from './workers';

export function* watcherCreateSession() {
  yield takeLatest(CREATE_SESSION, workerCreateSession);
}

export function* watcherGetSessions() {
  yield takeLatest(GET_SESSIONS, workerGetSessions);
}

export function* watcherGetSessionTypes() {
  yield takeLatest(GET_SESSION_TYPES, workerGetSessionTypes);
}

export default [
  watcherCreateSession(),
  watcherGetSessions(),
  watcherGetSessionTypes(),
];
