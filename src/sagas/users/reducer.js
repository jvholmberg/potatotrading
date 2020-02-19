import { fromJS } from 'immutable';
import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
} from './actions';
import { getActionName, getActionStatus, ABORTED } from '../actionCreator'
import { updateRequest } from '../reducerCreator';

export const defaultState = fromJS({
  my: null,
  others: null,
  requests: {
    [CREATE_USER]: { pending: false, done: false, error: null },
    [GET_MY_USER]: { pending: false, done: false, error: null },
    [GET_USERS]: { pending: false, done: false, error: null },
    [UPDATE_USER]: { pending: false, done: false, error: null },
    [DELETE_USER]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, action = {}) => {
  const { type, payload, error = null } = action;
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  if (actionStatus === ABORTED) {
    return state;
  }
  switch (actionName) {
  case CREATE_USER:
    return state
      .setIn(['requests', CREATE_USER], updateRequest(actionStatus, error));
  case GET_MY_USER:
    return state.withMutations(s => s
      .set('my', payload ? fromJS(payload) : defaultState.get('my'))
      .setIn(['requests', GET_MY_USER], updateRequest(actionStatus, error)));
  case GET_USERS:
    return state.withMutations(s => s
      .set('others', payload ? fromJS(payload) : defaultState.get('others'))
      .setIn(['requests', GET_USERS], updateRequest(actionStatus, error)));
  case UPDATE_USER:
    return state.withMutations(s => s
      .set('others', payload ? fromJS(payload) : defaultState.get('others'))
      .setIn(['requests', UPDATE_USER], updateRequest(actionStatus, error)));
  case DELETE_USER:
    return state
      .setIn(['requests', DELETE_USER], updateRequest(actionStatus, error));
  default:
    return state;
  }
};
