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
  LOAD_TOKEN,
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  CHANGE_PASSWORD
} from './constants';

export const getInitialState = () => ({
  token: {
    access_token: null,
    token_type: null,
    refresh_token: null,
    valid_until: null,
    expires_in: null,
  },
  requests: {
    [LOAD_TOKEN]: { pending: false, done: false, error: null },
    [GET_TOKEN]: { pending: false, done: false, error: null },
    [VALIDATE_TOKEN]: { pending: false, done: false, error: null },
    [REFRESH_TOKEN]: { pending: false, done: false, error: null },
    [DESTROY_TOKEN]: { pending: false, done: false, error: null },
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
  case LOAD_TOKEN:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token.access_token', payload.access_token);
      _.set(draft, 'token.refresh_token', payload.refresh_token);
      _.set(draft, 'token.token_type', payload.token_type);
    }
    _.set(draft, `requests.${LOAD_TOKEN}`, updateRequest(actionStatus, error));
    break;
  case GET_TOKEN:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', payload);
    }
    _.set(draft, `requests.${GET_TOKEN}`, updateRequest(actionStatus, error));
    break;
  case VALIDATE_TOKEN:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token.valid_until', payload.valid_until);
      _.set(draft, 'token.expires_in', payload.expires_in);
    }
    _.set(draft, `requests.${VALIDATE_TOKEN}`, updateRequest(actionStatus, error));
    break;
  case REFRESH_TOKEN:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', payload);
    }
    _.set(draft, `requests.${REFRESH_TOKEN}`, updateRequest(actionStatus, error));
    break;
  case DESTROY_TOKEN:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'token', getInitialState().token);
      _.set(draft, 'requests', getInitialState().requests);
    }
    _.set(draft, `requests.${DESTROY_TOKEN}`, updateRequest(actionStatus, error));
    break;
  case CHANGE_PASSWORD:
    _.set(draft, `requests.${CHANGE_PASSWORD}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
