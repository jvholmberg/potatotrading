import { fromJS } from 'immutable';
import { CREATE_SESSION, GET_SESSIONS } from './actions';

export const defaultState = fromJS({
  sessions: [],
  requests: {
    [CREATE_SESSION]: { pending: false, done: false, error: null },
    [GET_SESSIONS]: { pending: false, done: false, error: null },
  },
});

export default (state = defaultState, { type, payload }) => {
  // TODO: implement
  switch (type) {
  case GET_SESSIONS:
    return payload;
  default:
    return state;
  }
};
