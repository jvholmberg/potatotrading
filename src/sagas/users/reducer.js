/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  getActionType,
  updateRequest,
  getActionName,
  getActionStatus,
} from '../sagaHelpers'
import { SUCCESS, ABORTED } from '../constants';
import {
  reducerName,
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './constants';

export const getInitialState = () => ({
  my: null,
  others: null,
  requests: {
    [CREATE_USER]: { pending: false, done: false, error: null },
    [GET_MY_USER]: { pending: false, done: false, error: null },
    [GET_USERS]: { pending: false, done: false, error: null },
    [UPDATE_USER]: { pending: false, done: false, error: null },
    [DELETE_USER]: { pending: false, done: false, error: null },
  },
});

export default produce((draft = getInitialState(), action = {}) => {
  const { type, payload, error = null } = action;

  // Action belongs to other reducer; Exit
  const actionType = getActionType(type);
  if (actionType !== reducerName) {
    return draft;
  }

  // No status; Action was aborted; Exit
  const actionStatus = getActionStatus(type);
  if (!actionStatus || actionStatus === ABORTED) {
    return draft;
  }

  // Execute action; Return draft
  const actionName = getActionName(type);
  switch (actionName) {
  case CREATE_USER:
    _.set(draft, `requests.${CREATE_USER}`, updateRequest(actionStatus, error));
    break;
  case GET_MY_USER:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'my', payload);
    }
    _.set(draft, `requests.${GET_MY_USER}`, updateRequest(actionStatus, error));
    break;
  case GET_USERS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'others', payload);
    }
    _.setWith(draft, `requests.${GET_USERS}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_USER:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'others', payload);
    }
    _.set(draft, `requests.${UPDATE_USER}`, updateRequest(actionStatus, error));
    break;
  case DELETE_USER:
    _.set(draft, `requests.${DELETE_USER}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
