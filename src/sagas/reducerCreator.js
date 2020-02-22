import {
  PENDING, SUCCESS, FAILED,
} from './actionCreator';

export const updateRequest = (actionStatus, error) => ({
  pending: actionStatus === PENDING,
  done: actionStatus === SUCCESS || actionStatus === FAILED,
  error,
});

const applyFn = (state, fn) => fn(state);
export const pipe = (fns, state) =>
  state.withMutations(s => fns.reduce(applyFn, s));
