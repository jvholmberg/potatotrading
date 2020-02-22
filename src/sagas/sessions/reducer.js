/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';
import {
  getActionName, getActionStatus, getActionType, ABORTED, SUCCESS, REQ,
} from '../actionCreator'
import { updateRequest } from '../reducerCreator';

export const getInitialState = () => ({
  data: [],
  types: [],
  requests: {
    [CREATE_SESSION]: { pending: false, done: false, error: null },
    [GET_SESSIONS]: { pending: false, done: false, error: null },
    [GET_SESSION_TYPES]: { pending: false, done: false, error: null },
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
  case CREATE_SESSION:
    if (actionStatus === SUCCESS) _.set(draft, 'data', payload);
    _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(actionStatus, error));
    break;
  case GET_SESSIONS:
    if (actionStatus === SUCCESS) _.set(draft, 'data', payload);
    _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(actionStatus, error));
    break;
  case GET_SESSION_TYPES:
    if (actionStatus === SUCCESS) _.set(draft, 'types', payload);
    _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
