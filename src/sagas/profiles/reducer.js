/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  getActionName,
  getActionStatus,
  getActionType,
  updateRequest,
} from '../sagaHelpers'
import {
  reducerName,
  GET_PROFILE,
  UPDATE_PROFILE
} from './constants';
import { ABORTED } from '../constants';

export const getInitialState = () => ({
  profile: null,
  requests: {
    [GET_PROFILE]: { pending: false, done: false, error: null },
    [UPDATE_PROFILE]: { pending: false, done: false, error: null },
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
  case GET_PROFILE:
    _.set(draft, 'profile', payload);
    _.set(draft, `requests.${GET_PROFILE}`, updateRequest(actionStatus, error));
    break;
  case UPDATE_PROFILE:
    _.set(draft, 'profile', payload);
    _.set(draft, `requests.${UPDATE_PROFILE}`, updateRequest(actionStatus, error));
    break;
  }
  return draft;
});
