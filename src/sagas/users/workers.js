import { call, put } from 'redux-saga/effects';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import { getAccessToken } from '../storage';
import * as Api from '../../utils/api';

import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
} from './actions';

export function* workerCreateUser(action) {
  try {
    yield put({ type: createRequestAction(CREATE_USER, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users',
      data: action.payload,
    });
    yield put({ type: createRequestAction(CREATE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(CREATE_USER, FAILED), error: err });
  }
}

export function* workerGetMyUser() {
  try {
    yield put({ type: createRequestAction(GET_MY_USER, PENDING) });
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users/my',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createRequestAction(GET_MY_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_MY_USER, FAILED), error: err });
  }
}

export function* workerGetUsers() {
  try {
    yield put({ type: createRequestAction(GET_USERS, PENDING) });
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/users',
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createRequestAction(GET_USERS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_USERS, FAILED), error: err });
  }
}

export function* workerUpdateUser({ payload }) {
  try {
    yield put({ type: createRequestAction(UPDATE_USER, PENDING) });
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'update',
      url: `/users/${payload.id}`,
      data: payload.values,
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createRequestAction(UPDATE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(UPDATE_USER, FAILED), error: err });
  }
}

export function* workerDeleteUser({ payload }) {
  try {
    yield put({ type: createRequestAction(DELETE_USER, PENDING) });
    const accessToken = yield call(getAccessToken);
    yield call(Api.instance, {
      method: 'delete',
      url: `/users/${payload}`,
      headers: Api.generateHeaders(accessToken),
    });
    yield put({ type: createRequestAction(DELETE_USER, SUCCESS) });
  } catch (err) {
    yield put({ type: createRequestAction(DELETE_USER, FAILED), error: err });
  }
}
