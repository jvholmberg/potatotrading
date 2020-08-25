import {
  PENDING,
  SUCCESS,
  FAILED,
  // ABORTED,
} from './constants';

export const createAction = (name, status) => `${name}/${status}`;

export const getActionType = (action = ':') => action.split(':')[0];
export const getActionName = (action = '/') => action.split('/')[0];
export const getActionStatus = (action = '/') => action.split('/')[1];

export const updateTask = (actionStatus, error) => ({
  pending: actionStatus === PENDING,
  done: actionStatus === SUCCESS || actionStatus === FAILED,
  error,
});

export const updateRequest = (actionStatus, error) => ({
  pending: actionStatus === PENDING,
  done: actionStatus === SUCCESS || actionStatus === FAILED,
  error,
});
