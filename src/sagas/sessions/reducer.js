import { fromJS } from 'immutable';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';
import {
  getActionName, getActionStatus, PENDING, SUCCESS, FAILED, ABORTED
} from '../actionCreator'

export const defaultState = fromJS({
  sessions: [],
  types: [],
  requests: {
    [CREATE_SESSION]: { pending: false, done: false, error: null },
    [GET_SESSIONS]: { pending: false, done: false, error: null },
    [GET_SESSION_TYPES]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, action) => {
  const { type, payload } = action || {};
  const { error, ...rest } = payload || {};
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  switch (actionName) {
  case CREATE_SESSION:
  case GET_SESSIONS:
  case GET_SESSION_TYPES:
    return fromJS({
      ...state.toJS(),
      ...rest,
      requests: {
        ...state.toJS().requests,
        [actionName]: {
          pending: actionStatus === PENDING,
          done: actionStatus === SUCCESS || actionStatus === FAILED || actionStatus === ABORTED,
          error: error || null,
        },
      },
    });
  default:
    return state;
  }
};
