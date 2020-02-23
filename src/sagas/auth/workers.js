import { call, put } from 'redux-saga/effects';
import history from '../../utils/history';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT
} from './actions';
import * as Api from '../../utils/api';

export function* workerGetJwt({ email, password }) {
  try {
    yield put({ type: createRequestAction(GET_JWT, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users/auth',
      data: {
        email,
        password,
      },
    });
    yield call([localStorage, 'setItem'], 'accessToken', data.accessToken);
    yield call([localStorage, 'setItem'], 'refreshToken', data.refreshToken);
    yield call([history, 'push'], '/diary');
    yield put({ type: createRequestAction(GET_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_JWT, FAILED), error: err });
  }
}

export function* workerValidateJwt() {
  try {
    yield put({ type: createRequestAction(VALIDATE_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], 'accessToken');
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createRequestAction(VALIDATE_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(VALIDATE_JWT, FAILED), error: err });
  }
}

export function* workerRefreshJwt() {
  try {
    yield put({ type: createRequestAction(REFRESH_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], 'accessToken');
    const refreshToken = yield call([localStorage, 'getItem'], 'refreshToken');
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/users/auth/${refreshToken}`,
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'setItem'], 'accessToken', data.accessToken);
    yield call([localStorage, 'setItem'], 'refreshToken', data.refreshToken);
    yield put({ type: createRequestAction(REFRESH_JWT, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(REFRESH_JWT, FAILED), error: err });
  }
}

export function* workerDestroyJwt() {
  try {
    yield put({ type: createRequestAction(DESTROY_JWT, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], 'accessToken');
    yield call(Api.instance, {
      method: 'delete',
      url: '/users/auth',
      headers: Api.generateHeaders(accessToken),
    });
    yield call([localStorage, 'removeItem'], 'accessToken');
    yield call([localStorage, 'removeItem'], 'refreshToken');
    yield put({ type: createRequestAction(DESTROY_JWT, SUCCESS) });
    yield call([history, 'push'], '/');
  } catch (err) {
    yield put({ type: createRequestAction(DESTROY_JWT, FAILED), error: err });
  }
}
