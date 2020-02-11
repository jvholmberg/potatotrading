import { takeLatest } from 'redux-saga/effects';

import {
  CREATE_USER, GET_MY_USER, GET_USER, UPDATE_USER, DELETE_USER,
} from './actions';
import {
  workerCreateUser, workerGetUser, workerUpdateUser, workerDeleteUser, workerGetMyUser,
} from './workers';

export function* watcherCreateUser() {
  yield takeLatest(CREATE_USER, workerCreateUser);
}

export function* watcherGetMyUser() {
  yield takeLatest(GET_MY_USER, workerGetMyUser);
}

export function* watcherGetUser() {
  yield takeLatest(GET_USER, workerGetUser);
}

export function* watcherUpdateUser() {
  yield takeLatest(UPDATE_USER, workerUpdateUser);
}

export function* watcherDeleteUser() {
  yield takeLatest(DELETE_USER, workerDeleteUser);
}

export default [
  watcherCreateUser(),
  watcherGetMyUser(),
  watcherGetUser(),
  watcherUpdateUser(),
  watcherDeleteUser(),
];
