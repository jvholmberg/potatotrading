import { takeLatest } from 'redux-saga/effects';

import { CREATE_SESSION, GET_SESSIONS } from './actions';
import { workerCreateSession, workerGetSessions } from './workers';

export default [
	watcherCreateSession(),
	watcherGetSessions(),
];

export function* watcherCreateSession () {
  yield takeLatest(CREATE_SESSION, workerCreateSession);
};

export function* watcherGetSessions () {
  yield takeLatest(GET_SESSIONS, workerGetSessions);
};