import { call, put } from 'redux-saga/effects';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import { GET_PROFILE, UPDATE_PROFILE } from './actions';
import { getAccessToken } from '../storage';
import * as Api from '../../utils/api';

export function* workerGetProfile(action) {
  try {
    yield put({ type: createRequestAction(GET_PROFILE, PENDING), payload: null });
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: `/users/${action.payload}/profile`,
    });
    yield put({ type: createRequestAction(GET_PROFILE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_PROFILE, FAILED), error: err });
  }
}

export function* workerUpdateProfile(action) {
  try {
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'update',
      url: `/users/${action.payload.id}/profile`,
      headers: Api.generateHeaders(accessToken),
      data: action.payload.values,
    });
    yield put({ type: createRequestAction(UPDATE_PROFILE, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(UPDATE_PROFILE, FAILED), error: err });
  }
}
