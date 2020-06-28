import { takeLatest } from 'redux-saga/effects';
import {
  GET_SETTINGS,
  UPDATE_NOTIFICAIONS,
  EDIT_GRAPHS,
} from './constants';
import {
  workerGetUserSettings,
  workerUpdateNotificationsSettings,
  workerEditGraphsSettings,
} from './workers';

function* watcherGetUserSettings() {
  yield takeLatest(GET_SETTINGS, workerGetUserSettings);
}

function* watcherUpdateNotificationsSettings() {
  yield takeLatest(UPDATE_NOTIFICAIONS, workerUpdateNotificationsSettings);
}

function* watcherEditGraphsSettings() {
  yield takeLatest(EDIT_GRAPHS, workerEditGraphsSettings);
}

export default [
  watcherGetUserSettings(),
  watcherUpdateNotificationsSettings(),
  watcherEditGraphsSettings(),
];
