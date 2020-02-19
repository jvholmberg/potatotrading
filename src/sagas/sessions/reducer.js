import { fromJS } from 'immutable';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';
import { getActionName, getActionStatus, ABORTED } from '../actionCreator'
import { updateRequest } from '../reducerCreator';

export const defaultState = fromJS({
  data: [],
  types: [],
  requests: {
    [CREATE_SESSION]: { pending: false, done: false, error: null },
    [GET_SESSIONS]: { pending: false, done: false, error: null },
    [GET_SESSION_TYPES]: { pending: false, done: false, error: null },
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
  case CREATE_SESSION:
    return state.withMutations(s => s
      .set('data', payload ? fromJS(payload) : state.get('data'))
      .setIn(['requests', CREATE_SESSION], updateRequest(actionStatus, error)));
  case GET_SESSIONS:
    return state.withMutations(s => s
      .set('data', payload ? fromJS(payload) : defaultState.get('data'))
      .setIn(['requests', GET_SESSIONS], updateRequest(actionStatus, error)));
  case GET_SESSION_TYPES:
    return state.withMutations(s => s
      .set('types', payload ? fromJS(payload) : defaultState.get('types'))
      .setIn(['requests', GET_SESSION_TYPES], updateRequest(actionStatus, error)));
  default:
    return state;
  }
};
