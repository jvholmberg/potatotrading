import { call, put } from 'redux-saga/effects';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import * as Api from '../../utils/api';

import {
  CREATE_USER, GET_USER, UPDATE_USER, DELETE_USER,
} from './actions';

export function* workerCreateUser(action) {
  try {
    yield put({ type: createRequestAction(CREATE_USER, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users',
      data: action.payload,
    });
    yield put({ type: createRequestAction(CREATE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(CREATE_USER, FAILED), error: err })
  }
}

export function* workerGetUser(action) {
  try {
    yield put({ type: createRequestAction(GET_USER, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/users/${action.payload}`,
    });
    yield put({ type: createRequestAction(GET_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_USER, FAILED), error: err })
  }
}

export function* workerUpdateUser({ payload }) {
  try {
    yield put({ type: createRequestAction(UPDATE_USER, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'update',
      url: `/users/${payload.id}`,
      data: payload.values,
    });
    yield put({ type: createRequestAction(UPDATE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(UPDATE_USER, FAILED), error: err })
  }
}

export function* workerDeleteUser(action) {
  try {
    yield put({ type: createRequestAction(DELETE_USER, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'delete',
      url: `/users/${action.payload}`,
    });
    yield put({ type: createRequestAction(DELETE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(DELETE_USER, FAILED), error: err })
  }
}
