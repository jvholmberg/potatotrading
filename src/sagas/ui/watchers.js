import { takeEvery } from 'redux-saga/effects';
import { SIDEBAR_OPEN } from './actions';
import { workerSidebarOpen } from './workers';

export default [
	watcherSidebarOpen(),
];

function* watcherSidebarOpen() {
  yield takeEvery(SIDEBAR_OPEN, workerSidebarOpen); 
};