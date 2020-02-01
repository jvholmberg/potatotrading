import { takeEvery } from 'redux-saga/effects';
import { SIDEBAR_OPEN, SCREEN_SIZE } from './actions';
import { workerScreenSize, workerSidebarOpen } from './workers';

function* watcherScreenSize() {
  yield takeEvery(SCREEN_SIZE, workerScreenSize);
}

function* watcherSidebarOpen() {
  yield takeEvery(SIDEBAR_OPEN, workerSidebarOpen);
}

export default [
  watcherScreenSize(),
  watcherSidebarOpen(),
];
