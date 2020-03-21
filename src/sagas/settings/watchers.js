import { takeLatest } from 'redux-saga/effects';
import {
  CHANGE_PASSWORD,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';
import {
  workerChangePassword,
  workerUpdatePrivacySettings,
  workerUpdateNotificationsSettings,
} from './workers';

function* watcherChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, workerChangePassword);
}

function* watcherUpdatePrivacySettings() {
  yield takeLatest(UPDATE_PRIVACY, workerUpdatePrivacySettings);
}

function* watcherUpdateNotificationsSettings() {
  yield takeLatest(UPDATE_NOTIFICAIONS, workerUpdateNotificationsSettings);
}

export default [
  watcherChangePassword(),
  watcherUpdatePrivacySettings(),
  watcherUpdateNotificationsSettings(),
];
