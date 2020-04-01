/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import { SUCCESS } from '../constants';
import {
  getActionName,
  getActionStatus,
  getActionType,
  updateRequest,
} from '../sagaHelpers'
import {
  reducerName,
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
  CHANGE_PASSWORD
} from './constants';

export const getInitialState = () => ({
  token: {
    accessToken: null,
    refreshToken: null,
    validUntil: null,
    expiresIn: null,
  },
  requests: {
    [GET_JWT]: { pending: false, done: false, error: null },
    [VALIDATE_JWT]: { pending: false, done: false, error: null },
    [REFRESH_JWT]: { pending: false, done: false, error: null },
    [DESTROY_JWT]: { pending: false, done: false, error: null },
    [CHANGE_PASSWORD]: { pending: false, done: false, error: null },
  },
});
export default produce((draft = getInitialState(), action = {}) => {
  const { type, payload, error = null } = action;
  const actionType = getActionType(type);
  if (actionType !== reducerName) {
    return draft;
  }
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  switch (actionName) {
  case GET_JWT:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', payload);
    }
    _.set(draft, `requests.${GET_JWT}`, updateRequest(actionStatus, error));
    break;
  case VALIDATE_JWT:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token.validUntil', payload.validUntil);
      _.set(draft, 'token.expiresIn', payload.expiresIn);
    }
    _.set(draft, `requests.${VALIDATE_JWT}`, updateRequest(actionStatus, error));
    break;
  case REFRESH_JWT:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', payload);
    }
    _.set(draft, `requests.${REFRESH_JWT}`, updateRequest(actionStatus, error));
    break;
  case DESTROY_JWT:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', getInitialState().token);
      _.set(draft, 'requests', getInitialState().requests);
    }
    _.set(draft, `requests.${DESTROY_JWT}`, updateRequest(actionStatus, error));
    break;
  case CHANGE_PASSWORD:
    _.set(draft, `requests.${CHANGE_PASSWORD}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
