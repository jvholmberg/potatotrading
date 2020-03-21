import { takeLatest } from 'redux-saga/effects';
import {
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from './constants';
import {
  workerCreateSession,
  workerGetSessions,
  workerGetSessionTypes,
} from './workers';

function* watcherCreateSession() {
  yield takeLatest(CREATE_SESSION, workerCreateSession);
}

function* watcherGetSessions() {
  yield takeLatest(GET_SESSIONS, workerGetSessions);
}

function* watcherGetSessionTypes() {
  yield takeLatest(GET_SESSION_TYPES, workerGetSessionTypes);
}

export default [
  watcherCreateSession(),
  watcherGetSessions(),
  watcherGetSessionTypes(),
];
