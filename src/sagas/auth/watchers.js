import { takeLatest } from 'redux-saga/effects';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT
} from './actions';
import {
  workerGetJwt, workerValidateJwt, workerRefreshJwt, workerDestroyJwt
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

export default [
  watcherGetJwt(),
  watcherValidateJwt(),
  watcherRefreshJwt(),
  watcherDestroyJwt(),
];
