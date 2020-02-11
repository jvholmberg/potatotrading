import { fromJS } from 'immutable';
import {
  CREATE_USER, GET_MY_USER, GET_USER, UPDATE_USER, DELETE_USER,
} from './actions';
import {
  getActionName, getActionStatus, PENDING, SUCCESS, FAILED,
} from '../actionCreator'

export const defaultState = fromJS({
  my: null,
  others: null,
  requests: {
    [CREATE_USER]: { pending: false, done: false, error: null },
    [GET_MY_USER]: { pending: false, done: false, error: null },
    [GET_USER]: { pending: false, done: false, error: null },
    [UPDATE_USER]: { pending: false, done: false, error: null },
    [DELETE_USER]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, action) => {
  const { type, payload } = action || {};
  const { error, ...rest } = payload || {};
  const actionName = getActionName(type);
  const actionStatus = getActionStatus(type);
  switch (actionName) {
  case CREATE_USER:
  case GET_MY_USER:
  case GET_USER:
  case UPDATE_USER:
  case DELETE_USER:
    return fromJS({
      ...state.toJS(),
      ...rest,
      requests: {
        ...state.toJS().requests,
        [actionName]: {
          pending: actionStatus === PENDING,
          done: actionStatus === SUCCESS || actionStatus === FAILED,
          error: error || null,
        },
      },
    });
  default:
    return state;
  }
};
