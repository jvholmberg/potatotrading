import { fromJS } from 'immutable';
import {
  PENDING, SUCCESS, FAILED, ABORTED,
} from './actionCreator';

export const createInitialState = initialState => fromJS(initialState);

export const updateRequest = (actionStatus, error) => fromJS({
  pending: actionStatus === PENDING,
  done: actionStatus === SUCCESS || actionStatus === FAILED || actionStatus === ABORTED,
  error,
});

const applyFn = (state, fn) => fn(state);
export const pipe = (fns, state) =>
  state.withMutations(s => fns.reduce(applyFn, s));
