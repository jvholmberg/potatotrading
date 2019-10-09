import { takeEvery } from 'redux-saga/effects';
import {
	SET_SESSION_STORAGE, GET_SESSION_STORAGE, DELETE_SESSION_STORAGE,
	SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, DELETE_LOCAL_STORAGE,
} from './actions';
import {
	workerSetSessionStorage, workerGetSessionStorage, workerDeleteSessionStorage,
	workerSetLocalStorage, workerGetLocalStorage, workerDeleteLocalStorage,
} from './workers';

export default [
	watcherSetSessionStorage(),
	watcherGetSessionStorage(),
	watcherDeleteSessionStorage(),
	watcherSetLocalStorage(),
	watcherGetLocalStorage(),
	watcherDeleteLocalStorage(),
];

function* watcherSetSessionStorage() {
  yield takeEvery(SET_SESSION_STORAGE, workerSetSessionStorage);
};
function* watcherGetSessionStorage() {
  yield takeEvery(GET_SESSION_STORAGE, workerGetSessionStorage);
};
function* watcherDeleteSessionStorage() {
  yield takeEvery(DELETE_SESSION_STORAGE, workerDeleteSessionStorage);
};
function* watcherSetLocalStorage() {
  yield takeEvery(SET_LOCAL_STORAGE, workerSetLocalStorage);
};
function* watcherGetLocalStorage() {
  yield takeEvery(GET_LOCAL_STORAGE, workerGetLocalStorage);
};
function* watcherDeleteLocalStorage() {
  yield takeEvery(DELETE_LOCAL_STORAGE, workerDeleteLocalStorage);
};
