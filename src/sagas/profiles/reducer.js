import { GET_PROFILE, UPDATE_PROFILE } from './actions';
import { getActionName, getActionStatus } from '../actionCreator'
import { createInitialState, updateRequest } from '../reducerCreator';

export const defaultState = createInitialState({
  profile: null,
  requests: {
    [GET_PROFILE]: { pending: false, done: false, error: null },
    [UPDATE_PROFILE]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, action) => {
  const { type, payload, error } = action || {};
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  switch (actionName) {
  case GET_PROFILE:
    return state
      .set('profile', payload)
      .setIn(['requests', GET_PROFILE], updateRequest(actionStatus, error))
  case UPDATE_PROFILE:
    return state
      .set('profile', payload)
      .setIn(['requests', UPDATE_PROFILE], updateRequest(actionStatus, error))
  default:
    return state;
  }
};
