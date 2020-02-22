/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
} from './actions';
import {
  getActionName, getActionStatus, ABORTED, getActionType, REQ, SUCCESS,
} from '../actionCreator'
import { updateRequest } from '../reducerCreator';

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
  const actionType = getActionType(type);
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  if (actionType !== REQ || actionStatus === ABORTED) {
    return draft;
  }
  switch (actionName) {
  case CREATE_USER:
    _.set(draft, `requests.${CREATE_USER}`, updateRequest(actionStatus, error));
    break;
  case GET_MY_USER:
    if (actionStatus === SUCCESS) _.set(draft, 'my', payload);
    _.set(draft, `requests.${GET_MY_USER}`, updateRequest(actionStatus, error));
    break;
  case GET_USERS:
    if (actionStatus === SUCCESS) _.set(draft, 'others', payload);
    _.setWith(draft, `requests.${GET_USERS}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_USER:
    if (actionStatus === SUCCESS) _.set(draft, 'others', payload);
    _.set(draft, `requests.${UPDATE_USER}`, updateRequest(actionStatus, error));
    break;
  case DELETE_USER:
    _.set(draft, `requests.${DELETE_USER}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
