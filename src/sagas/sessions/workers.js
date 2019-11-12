import { call, put } from 'redux-saga/effects';
import {
  createRequestAction, PENDING, SUCCESS, FAILED
} from '../actionCreator';
import { getAccessToken } from '../storage';
import * as Api from '../../utils/api';

import { CREATE_SESSION, GET_SESSIONS } from './actions';

export function* workerCreateSession(action) {
  try {
    yield put({ type: createRequestAction(CREATE_SESSION, PENDING), payload: null });
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/sessions',
      headers: Api.generateHeaders(accessToken),
      data: action.payload,
    });
    yield put({ type: createRequestAction(CREATE_SESSION, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(CREATE_SESSION, FAILED), error: err })
  }
}

export function* workerGetSessions({ from, to }) {
  try {
    yield put({ type: createRequestAction(GET_SESSIONS, PENDING), payload: null });
    const accessToken = yield call(getAccessToken);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/sessions',
      headers: Api.generateHeaders(accessToken),
      params: {
        from,
        to,
      },
    });
    yield put({ type: createRequestAction(GET_SESSIONS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createRequestAction(GET_SESSIONS, FAILED), error: err })
  }
}
