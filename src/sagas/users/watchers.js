import { takeLatest } from 'redux-saga/effects';

import { CREATE_USER } from './actions';
import { workerCreateUser } from './workers';

export default [
	watcherCreateUser(),
];

export function* watcherCreateUser () {
  yield takeLatest(CREATE_USER, workerCreateUser)
};