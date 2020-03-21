import { takeLatest } from 'redux-saga/effects';
import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './constants';
import {
  workerCreateUser,
  workerGetUsers,
  workerUpdateUser,
  workerDeleteUser,
  workerGetMyUser,
} from './workers';

export function* watcherCreateUser() {
  yield takeLatest(CREATE_USER, workerCreateUser);
}

export function* watcherGetMyUser() {
  yield takeLatest(GET_MY_USER, workerGetMyUser);
}

export function* watcherGetUsers() {
  yield takeLatest(GET_USERS, workerGetUsers);
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
  watcherGetUsers(),
  watcherUpdateUser(),
  watcherDeleteUser(),
];
