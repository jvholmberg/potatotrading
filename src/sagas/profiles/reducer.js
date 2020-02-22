/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import { GET_PROFILE, UPDATE_PROFILE } from './actions';
import {
  getActionName, getActionStatus, getActionType, ABORTED, REQ,
} from '../actionCreator'
import { updateRequest } from '../reducerCreator';

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
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  if (actionType !== REQ || actionStatus === ABORTED) {
    return draft;
  }
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
