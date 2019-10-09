import { takeLatest } from 'redux-saga/effects';

import { CREATE_SESSION } from './actions';
import { workerCreateSession } from './workers';

export default [
	watcherCreateSession(),
];

export function* watcherCreateSession () {
  yield takeLatest(CREATE_SESSION, workerCreateSession)
};