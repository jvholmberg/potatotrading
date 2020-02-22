import { put } from 'redux-saga/effects';
import { createStorageAction, SUCCESS, FAILED } from '../actionCreator';
import {
  SET_SESSION_STORAGE, GET_SESSION_STORAGE, DELETE_SESSION_STORAGE,
  SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, DELETE_LOCAL_STORAGE,
} from './actions';

export function* workerSetSessionStorage(action) {
  try {
    const { key, value } = action;
    window.sessionStorage.setItem(key, value);
    yield put({ type: createStorageAction(SET_SESSION_STORAGE, SUCCESS) });
  } catch (err) {
    yield put({ type: createStorageAction(SET_SESSION_STORAGE, FAILED), error: err });
  }
}

export function* workerGetSessionStorage(action) {
  try {
    const { key } = action;
    const data = window.sessionStorage.getItem(key);
    yield put({ type: createStorageAction(GET_SESSION_STORAGE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createStorageAction(GET_SESSION_STORAGE, FAILED), error: err });
  }
}

export function* workerDeleteSessionStorage(action) {
  try {
    const { key } = action;
    window.sessionStorage.removeItem(key);
    yield put({ type: createStorageAction(DELETE_SESSION_STORAGE, SUCCESS) });
  } catch (err) {
    yield put({ type: createStorageAction(DELETE_SESSION_STORAGE, FAILED), error: err });
  }
}

export function* workerSetLocalStorage(action) {
  try {
    const { key, value } = action;
    window.localStorage.setItem(key, value);
    yield put({ type: createStorageAction(SET_LOCAL_STORAGE, SUCCESS) });
  } catch (err) {
    yield put({ type: createStorageAction(SET_LOCAL_STORAGE, FAILED), error: err });
  }
}

export function* workerGetLocalStorage(action) {
  try {
    const { key } = action;
    const data = window.localStorage.getItem(key);
    yield put({ type: createStorageAction(GET_LOCAL_STORAGE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createStorageAction(GET_LOCAL_STORAGE, FAILED), error: err });
  }
}

export function* workerDeleteLocalStorage(action) {
  try {
    const { key } = action;
    window.localStorage.removeItem(key);
    yield put({ type: createStorageAction(DELETE_LOCAL_STORAGE, SUCCESS) });
  } catch (err) {
    yield put({ type: createStorageAction(DELETE_LOCAL_STORAGE, FAILED), error: err });
  }
}
