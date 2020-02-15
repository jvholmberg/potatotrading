import { runSaga } from 'redux-saga';

export async function recordSaga(saga, initialState, initialAction) {
  const dispatched = [];
  await runSaga(
    {
      getState: () => initialState,
      dispatch: action => dispatched.push(action),
    },
    saga,
    initialAction
  ).done;
  return dispatched;
}

export default recordSaga;
