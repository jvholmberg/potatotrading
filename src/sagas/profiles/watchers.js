import { takeLatest } from 'redux-saga/effects';
import {
  GET_PROFILE,
  UPDATE_PROFILE,
} from './constants';
import {
  workerGetProfile,
  workerUpdateProfile,
} from './workers';

function* watcherGetProfile() {
  yield takeLatest(GET_PROFILE, workerGetProfile);
}

function* watcherUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, workerUpdateProfile);
}

export default [
  watcherGetProfile(),
  watcherUpdateProfile(),
];
