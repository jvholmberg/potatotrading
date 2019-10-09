import { call, put } from 'redux-saga/effects';
import { createRequestAction, PENDING, SUCCESS, FAILED } from '../actionCreator';
import * as Api from '../../utils/api';

import { CREATE_SESSION } from './actions';

export function* workerCreateSession(action) {
	try	{
		yield put({ type: createRequestAction(CREATE_SESSION, PENDING), payload: null });
		const response = yield call(Api.instance, {
			method: 'post',
			url: '/users',
			data: action.payload,
		});
		const json = yield response.json();
		yield put({ type: createRequestAction(CREATE_SESSION, SUCCESS), payload: json });
	} catch(err) {
		yield put({ type: createRequestAction(CREATE_SESSION, FAILED), error: err })
	}
};
