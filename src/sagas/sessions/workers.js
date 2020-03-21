import { call, put, select } from 'redux-saga/effects';
import * as Api from '../../utils/api';
import { createAction } from '../sagaHelpers';
import { selectGetSessionTypesReq } from './selectors';
import {
  PENDING,
  SUCCESS,
  FAILED,
  ABORTED,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
} from '../constants';
import {
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from './constants';

export function* workerCreateSession(action) {
  try {
    yield put({ type: createAction(CREATE_SESSION, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'post',
      url: '/sessions',
      headers: Api.generateHeaders(accessToken),
      data: action.payload,
    });
    yield put({ type: createAction(CREATE_SESSION, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(CREATE_SESSION, FAILED), error: err });
  }
}

export function* workerGetSessions({ from, to }) {
  try {
    yield put({ type: createAction(GET_SESSIONS, PENDING) });
    const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    const { data } = yield call(Api.instance, {
      method: 'get',
      url: '/sessions',
      headers: Api.generateHeaders(accessToken),
      params: {
        from,
        to,
      },
    });
    yield put({ type: createAction(GET_SESSIONS, SUCCESS), payload: data });
  } catch (err) {
    yield put({ type: createAction(GET_SESSIONS, FAILED), error: err });
  }
}

export function* workerGetSessionTypes() {
  try {
    // Abort worker?
    const request = yield select(selectGetSessionTypesReq);
    const shouldAbort = request.done && !request.error;
    if (shouldAbort) {
      yield put({ type: createAction(GET_SESSION_TYPES, ABORTED) });
    } else {
      yield put({ type: createAction(GET_SESSION_TYPES, PENDING) });
      const accessToken = yield call([localStorage, 'getItem'], LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      const { data } = yield call(Api.instance, {
        method: 'get',
        url: '/sessions/types',
        headers: Api.generateHeaders(accessToken),
      });
      yield put({ type: createAction(GET_SESSION_TYPES, SUCCESS), payload: data });
    }
  } catch (err) {
    yield put({ type: createAction(GET_SESSION_TYPES, FAILED), error: err });
  }
}
