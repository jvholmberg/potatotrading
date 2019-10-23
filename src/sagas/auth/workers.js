import { call, put } from 'redux-saga/effects';
import { createRequestAction, PENDING, SUCCESS, FAILED } from '../actionCreator';
import { defaultState } from './reducer';
import { GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT } from './actions';
import {
	setAccessToken, setRefreshToken,
	getAccessToken, getRefreshToken,
	deleteAccessToken, deleteRefreshToken,
} from '../storage';
import * as Api from '../../utils/api';

export function* workerGetJwt(action) {
	try	{
		yield put({ type: createRequestAction(GET_JWT, PENDING), payload: null });
		const { data } = yield call(Api.instance, {
			method: 'post',
			url: '/users/auth',
			data: action.payload,
		});
		yield put({ type: createRequestAction(GET_JWT, SUCCESS), payload: data });
	} catch(err) {
		yield put({ type: createRequestAction(GET_JWT, FAILED), error: err });
	}
};

export function* workerValidateJwt(action) {
	try	{
		yield put({ type: createRequestAction(VALIDATE_JWT, PENDING), payload: null });
		const accessToken = yield call(getAccessToken);
		const { data } = yield call(Api.instance, {
			method: 'get',
			url: '/users/auth',
			headers: Api.generateHeaders(accessToken),
		});
		yield put({ type: createRequestAction(VALIDATE_JWT, SUCCESS), payload: data });
	} catch(err) {
		yield put({ type: createRequestAction(VALIDATE_JWT, FAILED), error: err });
	}
};

export function* workerRefreshJwt(action) {
	try	{
		yield put({ type: createRequestAction(REFRESH_JWT, PENDING), payload: null });
		const accessToken = yield call(getAccessToken);
		const refreshToken = yield call(getRefreshToken);
		const { data } = yield call(Api.instance, {
			method: 'get',
			url: `/users/auth/${refreshToken}`,
			headers: Api.generateHeaders(accessToken)
		});
		yield call(setAccessToken, data.accessToken);
		yield call(setRefreshToken, data.refreshToken);
		yield put({ type: createRequestAction(REFRESH_JWT, SUCCESS), payload: data });
	} catch(err) {
		yield put({ type: createRequestAction(REFRESH_JWT, FAILED), error: err });
	}
};

export function* workerDestroyJwt(action) {
	try	{
		yield put({ type: createRequestAction(DESTROY_JWT, PENDING), payload: null });
		const accessToken = yield call(getAccessToken);
		yield call(Api.instance, {
			method: 'delete',
			url: '/users/auth',
			headers: Api.generateHeaders(accessToken),
		});
		yield call(deleteAccessToken);
		yield call(deleteRefreshToken);
		yield put({ type: createRequestAction(DESTROY_JWT, SUCCESS), payload: defaultState.toJS() });
	} catch(err) {
		yield put({ type: createRequestAction(DESTROY_JWT, FAILED), error: err });
	}
};

