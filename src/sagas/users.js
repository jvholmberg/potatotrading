import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS } from '../actions';

const endpoint = (path) => `/api/${path}`;

export function* fetchUsers() {
	yield takeEvery(FETCH_USERS, function* () {
		try	{
			const response = yield call(fetch, endpoint);
			const json = yield response.json();
			yield put({ type: FETCH_USERS, payload: json });
		} catch(err) {
			yield put({ type: FETCH_USERS, error: err })
		}
	});
};