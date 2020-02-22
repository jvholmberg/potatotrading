/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT
} from './actions';
import {
  getActionName, getActionStatus, ABORTED, getActionType, REQ, SUCCESS,
} from '../actionCreator'
import { updateRequest } from '../reducerCreator';

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
  case GET_JWT:
    if (actionStatus === SUCCESS) _.set(draft, 'token', payload);
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
    if (actionStatus === SUCCESS) _.set(draft, 'token', payload);
    _.set(draft, `requests.${REFRESH_JWT}`, updateRequest(actionStatus, error));
    break;
  case DESTROY_JWT:
    _.set(draft, `requests.${DESTROY_JWT}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
