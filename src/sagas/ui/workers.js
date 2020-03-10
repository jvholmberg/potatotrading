import { put } from 'redux-saga/effects';
import { createUiAction } from '../actionCreator';
import { SIDEBAR_OPEN, SCREEN_SIZE, SORTING_DIARY } from './actions';

export function* workerScreenSize({ payload }) {
  yield put({ type: createUiAction(SCREEN_SIZE), payload });
}

export function* workerSidebarOpen({ payload }) {
  yield put({ type: createUiAction(SIDEBAR_OPEN), payload });
}

export function* workerSortingDiary({ payload }) {
  yield put({ type: createUiAction(SORTING_DIARY), payload });
}
