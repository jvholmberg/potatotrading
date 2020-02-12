import { fromJS } from 'immutable';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT
} from './actions';
import { getActionName, getActionStatus } from '../actionCreator'
import { updateRequest } from '../reducerCreator';

export const defaultState = fromJS({
  token: {
    accessToken: null,
    refreshToken: null,
    validUntil: null,
    expiresIn: null,
  },
  requests: {
    [GET_JWT]: { pending: false, done: false, error: null },
    [VALIDATE_JWT]: { pending: false, done: false, error: null },
    [REFRESH_JWT]: { pending: false, done: false, error: null },
    [DESTROY_JWT]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, action = {}) => {
  const { type, payload, error = null } = action;
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  switch (actionName) {
  case GET_JWT:
    return state.withMutations(s => s
      .set('token', payload ? fromJS(payload) : defaultState.get('token'))
      .setIn(['requests', GET_JWT], updateRequest(actionStatus, error)));
  case VALIDATE_JWT:
    return state.withMutations(s => s
      .setIn(['token', 'validUntil'], fromJS(payload ? payload.validUntil : null))
      .setIn(['token', 'expiresIn'], fromJS(payload ? payload.expiresIn : null))
      .setIn(['requests', VALIDATE_JWT], updateRequest(actionStatus, error)));
  case REFRESH_JWT:
    return state.withMutations(s => s
      .set('token', payload ? fromJS(payload) : state.get('token'))
      .setIn(['requests', REFRESH_JWT], updateRequest(actionStatus, error)));
  case DESTROY_JWT:
    return defaultState.setIn(['requests', DESTROY_JWT], updateRequest(actionStatus, error));
  default:
    return state;
  }
};
