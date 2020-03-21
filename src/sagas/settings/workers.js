import { call, put } from 'redux-saga/effects';
import * as Api from '../../utils/api';
import { createAction } from '../sagaHelpers';
import {
  CHANGE_PASSWORD,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';
import {
  PENDING,
  SUCCESS,
  FAILED,
} from '../constants';

export function* workerChangePassword(val) {
  try {
    yield put({ type: createAction(CHANGE_PASSWORD, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/auth/settings/password',
      data: val,
    });
    yield put({ type: createAction(CHANGE_PASSWORD, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(CHANGE_PASSWORD, FAILED), error: err });
  }
}

export function* workerUpdatePrivacySettings(val) {
  try {
    yield put({ type: createAction(UPDATE_PRIVACY, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users/settings/privacy',
      data: val,
    });
    yield put({ type: createAction(UPDATE_PRIVACY, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_PRIVACY, FAILED), error: err });
  }
}

export function* workerUpdateNotificationsSettings(val) {
  try {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, PENDING) });
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/users/settings/notifications',
      data: val,
    });
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_NOTIFICAIONS, FAILED), error: err });
  }
}
