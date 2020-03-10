import { takeEvery } from 'redux-saga/effects';
import { SIDEBAR_OPEN, SCREEN_SIZE, SORTING_DIARY } from './actions';
import { workerScreenSize, workerSidebarOpen, workerSortingDiary } from './workers';

function* watcherScreenSize() {
  yield takeEvery(SCREEN_SIZE, workerScreenSize);
}

function* watcherSidebarOpen() {
  yield takeEvery(SIDEBAR_OPEN, workerSidebarOpen);
}

function* watcherSortingDiary() {
  yield takeEvery(SORTING_DIARY, workerSortingDiary);
}

export default [
  watcherScreenSize(),
  watcherSidebarOpen(),
  watcherSortingDiary(),
];
