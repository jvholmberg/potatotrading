import { call, put } from 'redux-saga/effects';
import history from '../../utils/history';
import { createAction } from '../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
} from '../constants';
import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
  CHANGE_PASSWORD
} from './constants';
import * as Api from '../../utils/api';

export function* workerGetJwt({ payload }) {
  try {
    yield put({ type: createAction(GET_JWT, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users/auth',
      data: payload,
    });
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY, data.accessToken);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY, data.refreshToken);
    yield call([history, 'push'], '/diary');
    yield put({ type: createAction(GET_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_JWT, FAILED), error: err });
  }
}

export function* workerValidateJwt() {
  try {
    yield put({ type: createAction(VALIDATE_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(VALIDATE_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(VALIDATE_JWT, FAILED), error: err });
  }
}

export function* workerRefreshJwt() {
  try {
    yield put({ type: createAction(REFRESH_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const refreshToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/users/auth/${refreshToken}`,
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY, data.accessToken);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY, data.refreshToken);
    yield put({ type: createAction(REFRESH_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(REFRESH_JWT, FAILED), error: err });
  }
}

export function* workerDestroyJwt() {
  try {
    yield put({ type: createAction(DESTROY_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    yield call(Api.instance, {
      method: 'delete',
      url: '/users/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'removeItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    yield call([localStorage, 'removeItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    yield put({ type: createAction(DESTROY_JWT, SUCCESS) });
    yield call([history, 'push'], '/');
  } catch (err) {
    yield put({ type: createAction(DESTROY_JWT, FAILED), error: err });
  }
}

export function* workerChangePassword({ payload }) {
  try {
    yield put({ type: createAction(CHANGE_PASSWORD, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/auth/settings/password',
      data: payload,
    });
    yield put({ type: createAction(CHANGE_PASSWORD, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(CHANGE_PASSWORD, FAILED), error: err });
  }
}
