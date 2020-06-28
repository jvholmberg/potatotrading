import { call, put } from 'redux-saga/effects';
import * as Api from '../../utils/api';
import { createAction } from '../sagaHelpers';
import {
  GET_SETTINGS,
  UPDATE_NOTIFICAIONS,
  EDIT_GRAPHS,
} from './constants';
import {
  PENDING,
  SUCCESS,
  FAILED,
} from '../constants';

export function* workerGetUserSettings({ payload }) {
  try {
    yield put({ type: createAction(GET_SETTINGS, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/settings',
      data: payload,
    });
    yield put({ type: createAction(GET_SETTINGS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_SETTINGS, FAILED), error: err });
  }
}

export function* workerUpdateNotificationsSettings({ payload }) {
  try {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'put',
      url: '/settings/notifications',
      data: payload,
    });
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, FAILED), error: err });
  }
}

export function* workerEditGraphsSettings({ payload }) {
  try {
    yield put({ type: createAction(EDIT_GRAPHS, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'put',
      url: '/settings/graphs',
      data: payload,
    });
    yield put({ type: createAction(EDIT_GRAPHS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(EDIT_GRAPHS, FAILED), error: err });
  }
}
