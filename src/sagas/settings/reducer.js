/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  getActionName,
  getActionStatus,
  getActionType,
  updateRequest,
} from '../sagaHelpers'
import { SUCCESS } from '../constants';
import {
  reducerName,
  GET_SETTINGS,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';

export const getInitialState = () => ({
  privacy: {
    profile: null,
    sessions: null,
  },
  notifications: {
    email: null,
    push: null,
  },
  requests: {
    [GET_SETTINGS]: { pending: false, done: false, error: null },
    [UPDATE_PRIVACY]: { pending: false, done: false, error: null },
    [UPDATE_NOTIFICAIONS]: { pending: false, done: false, error: null },
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
  case GET_SETTINGS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'privacy', payload.privacy);
      _.set(draft, 'notifications', payload.notifications);
    }
    _.set(draft, `requests.${GET_SETTINGS}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_PRIVACY:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'privacy', payload);
    }
    _.set(draft, `requests.${UPDATE_PRIVACY}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_NOTIFICAIONS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'notifications', payload);
    }
    _.set(draft, `requests.${UPDATE_NOTIFICAIONS}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
