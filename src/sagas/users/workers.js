import { call, put } from 'redux-saga/effects';
import history from '../../utils/history';
import * as Api from '../../utils/api';
import { createAction } from '../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
} from '../constants';
import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './constants';

export function* workerCreateUser({ payload }) {
  try {
    yield put({ type: createAction(CREATE_USER, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users',
      data: payload,
    });
    yield put({ type: createAction(CREATE_USER, SUCCESS), payload: data });
    yield call([history, 'push'], '/login');
  } catch (err) {
    yield put({ type: createAction(CREATE_USER, FAILED), error: err });
  }
}

export function* workerGetMyUser() {
  try {
    yield put({ type: createAction(GET_MY_USER, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users/my',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(GET_MY_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_MY_USER, FAILED), error: err });
  }
}

export function* workerGetUsers() {
  try {
    yield put({ type: createAction(GET_USERS, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(GET_USERS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_USERS, FAILED), error: err });
  }
}

export function* workerUpdateUser({ payload }) {
  try {
    yield put({ type: createAction(UPDATE_USER, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'update',
      url: `/users/${payload.id}`,
      data: payload.values,
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(UPDATE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_USER, FAILED), error: err });
  }
}

export function* workerDeleteUser({ payload }) {
  try {
    yield put({ type: createAction(DELETE_USER, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    yield call(Api.instance, {
      method: 'delete',
      url: `/users/${payload}`,
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(DELETE_USER, SUCCESS) });
  } catch (err) {
    yield put({ type: createAction(DELETE_USER, FAILED), error: err });
  }
}
