import { call, put } from 'redux-saga/effects';
import { createAction } from '../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
} from '../constants';
import { GET_PROFILE, UPDATE_PROFILE } from './constants';
import * as Api from '../../utils/api';

export function* workerGetProfile(action) {
  try {
    yield put({ type: createAction(GET_PROFILE, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/users/${action.payload}/profile`,
    });
    yield put({ type: createAction(GET_PROFILE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_PROFILE, FAILED), error: err });
  }
}

export function* workerUpdateProfile(action) {
  try {
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'update',
      url: `/users/${action.payload.id}/profile`,
      headers: Api.generateHeaders(accessToken),
      data: action.payload.values,
    });
    yield put({ type: createAction(UPDATE_PROFILE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(UPDATE_PROFILE, FAILED), error: err });
  }
}
