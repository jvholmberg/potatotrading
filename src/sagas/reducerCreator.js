import { fromJS } from 'immutable';
import {
  PENDING, SUCCESS, FAILED, ABORTED,
} from './actionCreator';

export const createInitialState = initialState => fromJS(initialState);

export const updateRequest = (actionStatus, error) => fromJS({
  pending: actionStatus === PENDING,
  done: actionStatus === SUCCESS || actionStatus === FAILED || actionStatus === ABORTED,
  aborted: actionStatus === ABORTED,
  error,
});
