import { takeLatest } from 'redux-saga/effects';

import {
  CREATE_USER, GET_USER, UPDATE_USER, DELETE_USER,
} from './actions';
import {
  workerCreateUser, workerGetUser, workerUpdateUser, workerDeleteUser,
} from './workers';

export function* watcherCreateUser() {
  yield takeLatest(CREATE_USER, workerCreateUser)
}

export function* watcherGetUser() {
  yield takeLatest(GET_USER, workerGetUser)
}

export function* watcherUpdateUser() {
  yield takeLatest(UPDATE_USER, workerUpdateUser)
}
export function* watcherDeleteUser() {
  yield takeLatest(DELETE_USER, workerDeleteUser)
}

export default [
  watcherCreateUser(),
  watcherGetUser(),
  watcherUpdateUser(),
  watcherDeleteUser(),
];
