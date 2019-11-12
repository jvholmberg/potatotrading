import { takeLatest } from 'redux-saga/effects';

import { CREATE_USER, DELETE_USER } from './actions';
import { workerCreateUser, workerDeleteUser } from './workers';


export function* watcherCreateUser() {
  yield takeLatest(CREATE_USER, workerCreateUser)
}

export function* watcherDeleteUser() {
  yield takeLatest(DELETE_USER, workerDeleteUser)
}

export default [
  watcherCreateUser(),
  watcherDeleteUser(),
];
