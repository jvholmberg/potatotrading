import { takeEvery } from 'redux-saga/effects';
import { SIDEBAR_OPEN, SCREEN_SIZE, REDIRECT } from './actions';
import { workerScreenSize, workerSidebarOpen, workerRedirect } from './workers';

function* watcherRedirect() {
  yield takeEvery(REDIRECT, workerRedirect);
}
function* watcherScreenSize() {
  yield takeEvery(SCREEN_SIZE, workerScreenSize);
}
function* watcherSidebarOpen() {
  yield takeEvery(SIDEBAR_OPEN, workerSidebarOpen);
}

export default [
  watcherRedirect(),
  watcherScreenSize(),
  watcherSidebarOpen(),
];
