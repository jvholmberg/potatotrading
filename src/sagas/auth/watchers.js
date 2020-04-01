import { takeLatest } from 'redux-saga/effects';
import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
  CHANGE_PASSWORD
} from './constants';
import {
  workerGetJwt,
  workerValidateJwt,
  workerRefreshJwt,
  workerDestroyJwt,
  workerChangePassword
} from './workers';

function* watcherGetJwt() {
  yield takeLatest(GET_JWT, workerGetJwt);
}

function* watcherValidateJwt() {
  yield takeLatest(VALIDATE_JWT, workerValidateJwt);
}

function* watcherRefreshJwt() {
  yield takeLatest(REFRESH_JWT, workerRefreshJwt);
}

function* watcherDestroyJwt() {
  yield takeLatest(DESTROY_JWT, workerDestroyJwt);
}

function* watcherChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, workerChangePassword);
}

export default [
  watcherGetJwt(),
  watcherValidateJwt(),
  watcherRefreshJwt(),
  watcherDestroyJwt(),
  watcherChangePassword(),
];
