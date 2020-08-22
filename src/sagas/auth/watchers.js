import { takeLatest } from 'redux-saga/effects';
import {
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  CHANGE_PASSWORD,
  LOAD_TOKEN
} from './constants';
import {
  workerLoadToken,
  workerGetToken,
  workerValidateToken,
  workerRefreshToken,
  workerDestroyToken,
  workerChangePassword,
} from './workers';

function* watcherLoadToken() {
  yield takeLatest(LOAD_TOKEN, workerLoadToken);
}

function* watcherGetToken() {
  yield takeLatest(GET_TOKEN, workerGetToken);
}

function* watcherValidateToken() {
  yield takeLatest(VALIDATE_TOKEN, workerValidateToken);
}

function* watcherRefreshToken() {
  yield takeLatest(REFRESH_TOKEN, workerRefreshToken);
}

function* watcherDestroyToken() {
  yield takeLatest(DESTROY_TOKEN, workerDestroyToken);
}

function* watcherChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, workerChangePassword);
}

export default [
  watcherLoadToken(),
  watcherGetToken(),
  watcherValidateToken(),
  watcherRefreshToken(),
  watcherDestroyToken(),
  watcherChangePassword(),
];
