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
  GET_SETTINGS,
  UPDATE_NOTIFICAIONS,
  EDIT_GRAPHS,
} from './constants';

export const getInitialState = () => ({
  notifications: {

  },
  graphs: {
    dataPeriod: { byId: {}, allIds: [], selected: null },
    // colorScheme
    // units
    // ...
  },
  requests: {
    [GET_SETTINGS]: { pending: false, done: false, error: null },
    [UPDATE_NOTIFICAIONS]: { pending: false, done: false, error: null },
    [EDIT_GRAPHS]: { pending: false, done: false, error: null },
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
  case GET_SETTINGS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'privacy', payload.privacy);
      _.set(draft, 'notifications', payload.notifications);

      // Set graphs settings
      _.forEach(payload.graphs.dataPeriod, e => {
        // Push to sessions.allIds if not already existing
        const exists = _.has(draft, `graphs.dataPeriod.byId.${e.id}`);
        if (!exists) _.get(draft, 'graphs.dataPeriod.allIds').push(e.id);
        // Add/Update graphs.dataPeriod.byId
        _.set(draft, `graphs.dataPeriod.byId.${e.id}`, e);
      });
    }
    _.set(draft, `requests.${GET_SETTINGS}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_NOTIFICAIONS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'notifications', payload);
    }
    _.set(draft, `requests.${UPDATE_NOTIFICAIONS}`, updateRequest(actionStatus, error));
    break;
  case EDIT_GRAPHS:
    if (actionStatus === SUCCESS) {
      _.set(draft, 'graphs', payload);
    }
    _.set(draft, `requests.${EDIT_GRAPHS}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
