import { put } from 'redux-saga/effects';
import { createAction } from '../sagaHelpers';
import { SET } from '../constants';
import {
  SIDEBAR_OPEN,
  SCREEN_SIZE,
  SORTING_DIARY,
} from './constants';

export function* workerScreenSize({ payload }) {
  yield put({ type: createAction(SCREEN_SIZE, SET), payload });
}

export function* workerSidebarOpen({ payload }) {
  yield put({ type: createAction(SIDEBAR_OPEN, SET), payload });
}

export function* workerSortingDiary({ payload }) {
  yield put({ type: createAction(SORTING_DIARY, SET), payload });
}
