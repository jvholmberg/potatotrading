import { call, put } from 'redux-saga/effects';
import history from '../../utils/history';
import { createAction } from '../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_TYPE_KEY,
} from '../constants';
import {
  LOAD_TOKEN,
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  CHANGE_PASSWORD,
} from './constants';
import * as Api from '../../utils/api';

export function* workerLoadToken() {
  try {
    yield put({ type: createAction(LOAD_TOKEN, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const refreshToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    const tokenType = yield call([localStorage, 'getItem'], LOCAL_STORAGE_TOKEN_TYPE_KEY);
    const data = {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: tokenType,
    };
    yield put({ type: createAction(LOAD_TOKEN, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(LOAD_TOKEN, FAILED), error: err });
  }
}

export function* workerGetToken({ payload }) {
  try {
    yield put({ type: createAction(GET_TOKEN, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/auth',
      data: payload,
    });
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY, data.access_token);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY, data.refresh_token);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_TOKEN_TYPE_KEY, data.token_type);
    yield call([history, 'push'], '/diary');
    yield put({ type: createAction(GET_TOKEN, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_TOKEN, FAILED), error: err });
  }
}

export function* workerValidateToken() {
  try {
    yield put({ type: createAction(VALIDATE_TOKEN, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createAction(VALIDATE_TOKEN, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(VALIDATE_TOKEN, FAILED), error: err });
  }
}

export function* workerRefreshToken() {
  try {
    yield put({ type: createAction(REFRESH_TOKEN, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const refreshToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/auth/${refreshToken}`,
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY, data.access_token);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY, data.refresh_token);
    yield call([localStorage, 'setItem'], LOCAL_STORAGE_TOKEN_TYPE_KEY, data.token_type);
    yield put({ type: createAction(REFRESH_TOKEN, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(REFRESH_TOKEN, FAILED), error: err });
  }
}

export function* workerDestroyToken() {
  try {
    yield put({ type: createAction(DESTROY_TOKEN, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    yield call(Api.instance, {
      method: 'delete',
      url: '/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'removeItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    yield call([localStorage, 'removeItem'], LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    yield call([localStorage, 'removeItem'], LOCAL_STORAGE_TOKEN_TYPE_KEY);
    yield put({ type: createAction(DESTROY_TOKEN, SUCCESS) });
    yield call([history, 'push'], '/');
  } catch (err) {
    yield put({ type: createAction(DESTROY_TOKEN, FAILED), error: err });
  }
}

export function* workerChangePassword({ payload }) {
  try {
    yield put({ type: createAction(CHANGE_PASSWORD, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'put',
      url: '/auth/password',
      data: payload,
    });
    yield put({ type: createAction(CHANGE_PASSWORD, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(CHANGE_PASSWORD, FAILED), error: err });
  }
}
