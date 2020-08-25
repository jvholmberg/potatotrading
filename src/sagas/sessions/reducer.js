/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  getActionName,
  getActionStatus,
  getActionType,
  updateRequest,
} from '../sagaHelpers'
import { SUCCESS, ABORTED } from '../constants';
import {
  reducerName,
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from './constants';

export const getInitialState = () => ({
  sessions: { byId: {}, allIds: [] },
  sessionTypes: { byId: {}, allIds: [] },
  requests: {
    [CREATE_SESSION]: { pending: false, done: false, error: null },
    [GET_SESSIONS]: { pending: false, done: false, error: null },
    [GET_SESSION_TYPES]: { pending: false, done: false, error: null },
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
  case CREATE_SESSION:
    if (actionStatus === SUCCESS) {
      _.set(draft, `sessions.byId.${payload.id}`, payload);
      _.get(draft, 'sessions.allIds').push(payload.id);
    }
    _.set(draft, `requests.${CREATE_SESSION}`, updateRequest(actionStatus, error));
    break;
  case GET_SESSIONS:
    if (actionStatus === SUCCESS) {
      _.forEach(payload, e => {
        // Push to sessions.allIds if not already existing
        const exists = _.has(draft, `sessions.byId.${e.id}`);
        if (!exists) _.get(draft, 'sessions.allIds').push(e.id);
        // Add/Update sessions.byId
        _.set(draft, `sessions.byId.${e.id}`, e);
      });
    }
    _.set(draft, `requests.${GET_SESSIONS}`, updateRequest(actionStatus, error));
    break;
  case GET_SESSION_TYPES:
    if (actionStatus === SUCCESS) {
      _.forEach(payload, e => {
        // Push to sessionTypes.allIds if not already existing
        const exists = _.has(draft, `sessionTypes.byId.${e.id}`);
        if (!exists) _.get(draft, 'sessionTypes.allIds').push(e.id);
        // Add/Update sessionTypes.byId
        _.set(draft, `sessionTypes.byId.${e.id}`, e);
      });
    }
    _.set(draft, `requests.${GET_SESSION_TYPES}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
