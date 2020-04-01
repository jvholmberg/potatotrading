import { call, put } from 'redux-saga/effects';
import * as Api from '../../utils/api';
import { createAction } from '../sagaHelpers';
import {
  GET_SETTINGS,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
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

export function* workerUpdatePrivacySettings({ payload }) {
  try {
    yield put({ type: createAction(UPDATE_PRIVACY, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/settings/privacy',
      data: payload,
    });
    yield put({ type: createAction(UPDATE_PRIVACY, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_PRIVACY, FAILED), error: err });
  }
}

export function* workerUpdateNotificationsSettings({ payload }) {
  try {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/settings/notifications',
      data: payload,
    });
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, FAILED), error: err });
  }
}
