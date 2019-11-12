import { call, put } from 'redux-saga/effects';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import * as Api from '../../utils/api';

import { CREATE_USER, DELETE_USER } from './actions';

export function* workerCreateUser(action) {
  try {
    yield put({ type: createRequestAction(CREATE_USER, PENDING), payload: null });
    const response = yield call(Api.instance, {
      method: 'post',
      url: '/users',
      data: action.payload,
    });
    const json = yield response.json();
    yield put({ type: createRequestAction(CREATE_USER, SUCCESS), payload: json });
  } catch (err) {
    yield put({ type: createRequestAction(CREATE_USER, FAILED), error: err })
  }
}

export function* workerDeleteUser(action) {
  try {
    yield put({ type: createRequestAction(DELETE_USER, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'delete',
      url: `/users/${action.payload}`,
      data: action.payload,
    });
    yield put({ type: createRequestAction(DELETE_USER, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(DELETE_USER, FAILED), error: err })
  }
}
