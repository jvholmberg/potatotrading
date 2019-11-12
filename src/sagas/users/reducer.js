import { fromJS } from 'immutable';
import { CREATE_USER, DELETE_USER } from './actions';

export const defaultState = fromJS({

});

export default (state = defaultState, { type, payload }) => {
  switch (type) {
  case CREATE_USER:
    return fromJS({ ...state, auth: { ...state.auth, ...payload } });
  case DELETE_USER:
    // TODO: implement this
    return fromJS({ ...state, auth: { ...state.auth, ...payload } });
  default:
    return state;
  }
};
