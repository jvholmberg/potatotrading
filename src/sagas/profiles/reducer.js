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

export const getInitialState = () => ({
  profile: null,
  requests: {
    [GET_PROFILE]: { pending: false, done: false, error: null },
    [UPDATE_PROFILE]: { pending: false, done: false, error: null },
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
