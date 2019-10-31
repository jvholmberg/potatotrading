import { put } from 'redux-saga/effects';
import { createUiAction } from '../actionCreator';
import { SIDEBAR_OPEN } from './actions';

export function* workerSidebarOpen({ payload }) {
	yield put({ type: createUiAction(SIDEBAR_OPEN), payload });
};
