import { takeLatest } from 'redux-saga/effects';
import {
  GET_SETTINGS,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';
import {
  workerGetUserSettings,
  workerUpdatePrivacySettings,
  workerUpdateNotificationsSettings,
} from './workers';

function* watcherGetUserSettings() {
  yield takeLatest(GET_SETTINGS, workerGetUserSettings);
}

function* watcherUpdatePrivacySettings() {
  yield takeLatest(UPDATE_PRIVACY, workerUpdatePrivacySettings);
}

function* watcherUpdateNotificationsSettings() {
  yield takeLatest(UPDATE_NOTIFICAIONS, workerUpdateNotificationsSettings);
}

export default [
  watcherGetUserSettings(),
  watcherUpdatePrivacySettings(),
  watcherUpdateNotificationsSettings(),
];
