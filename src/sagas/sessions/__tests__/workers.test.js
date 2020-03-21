import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import {
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from '../constants';
import {
  createAction,
  updateRequest
} from '../../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
  ABORTED,
} from '../../constants';
import {
  workerCreateSession,
  workerGetSessions,
  workerGetSessionTypes,
} from '../workers';

describe('sagas/sessions/workers.js', () => {
  const successResponse = { data: 'data' };
  const failedResponse = { message: 'message' };

  beforeEach(() => {
    const apiMock = sinon.stub(Api, 'instance');
    apiMock.onFirstCall().returns(successResponse);
    apiMock.onSecondCall().throws(failedResponse);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Create session', async () => {
    const input = { name: 'name', comment: 'comment' };
    let dispatched = await recordSaga(workerCreateSession, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(CREATE_SESSION, PENDING) });
    expect(dispatched[1]).toEqual({
      type: createAction(CREATE_SESSION, SUCCESS),
      payload: successResponse.data,
    });

    dispatched = await recordSaga(workerCreateSession, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(CREATE_SESSION, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(CREATE_SESSION, FAILED), error: failedResponse });
  });

  it('Get sessions', async () => {
    const input = { from: 0, to: 0 };
    let dispatched = await recordSaga(workerGetSessions, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_SESSIONS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_SESSIONS, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetSessions, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_SESSIONS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_SESSIONS, FAILED), error: failedResponse });
  });

  it('Get session-types', async () => {
    const initialState = {
      sessions: {
        requests: {
          [GET_SESSION_TYPES]: { pending: false, done: false, error: null },
        },
      },
    };
    let dispatched = await recordSaga(workerGetSessionTypes, initialState);
    expect(dispatched[0]).toEqual({ type: createAction(GET_SESSION_TYPES, PENDING) });
    expect(dispatched[1]).toEqual({
      type: createAction(GET_SESSION_TYPES, SUCCESS),
      payload: successResponse.data,
    });

    dispatched = await recordSaga(workerGetSessionTypes, initialState);
    expect(dispatched[0]).toEqual({ type: createAction(GET_SESSION_TYPES, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_SESSION_TYPES, FAILED), error: failedResponse });
  });

  it('Get session-types, existing already exists', async () => {
    const initialState = {
      sessions: {
        requests: {
          [GET_SESSION_TYPES]: updateRequest(SUCCESS),
        },
      },
    };
    const dispatched = await recordSaga(workerGetSessionTypes, initialState);
    expect(dispatched[0]).toEqual({ type: createAction(GET_SESSION_TYPES, ABORTED) });
    expect(dispatched.length).toBe(1);
  });
});
