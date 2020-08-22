import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import {
  workerLoadToken,
  workerGetToken,
  workerValidateToken,
  workerRefreshToken,
  workerDestroyToken,
} from '../workers';
import {
  LOAD_TOKEN,
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
} from '../constants';
import {
  PENDING,
  SUCCESS,
  FAILED,
} from '../../constants';
import { createAction } from '../../sagaHelpers';

describe('sagas/auth/workers.js', () => {
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

  it('Load token', async () => {
    const mockPayload = { access_token: null, refresh_token: null, token_type: null };
    const dispatched = await recordSaga(workerLoadToken, {});
    expect(dispatched[0]).toEqual({ type: createAction(LOAD_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(LOAD_TOKEN, SUCCESS), payload: mockPayload });
  });

  it('Get token', async () => {
    const input = { username: 'user@domain.com', password: '123' };
    let dispatched = await recordSaga(workerGetToken, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetToken, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_TOKEN, FAILED), error: failedResponse });
  });

  it('Validate token', async () => {
    let dispatched = await recordSaga(workerValidateToken);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerValidateToken);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_TOKEN, FAILED), error: failedResponse });
  });

  it('Refresh token', async () => {
    let dispatched = await recordSaga(workerRefreshToken);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerRefreshToken);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_TOKEN, FAILED), error: failedResponse });
  });

  it('Destroy token', async () => {
    let dispatched = await recordSaga(workerDestroyToken);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_TOKEN, SUCCESS) });

    dispatched = await recordSaga(workerDestroyToken);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_TOKEN, FAILED), error: failedResponse });
  });
});
