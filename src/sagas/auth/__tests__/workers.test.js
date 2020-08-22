import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import {
  workerGetToken,
  workerValidateToken,
  workerRefreshToken,
  workerDestroyToken,
} from '../workers';
import {
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

  it('Get jwt-token', async () => {
    const input = { username: 'user@domain.com', password: '123' };
    let dispatched = await recordSaga(workerGetToken, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetToken, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_TOKEN, FAILED), error: failedResponse });
  });

  it('Validate jwt-token', async () => {
    let dispatched = await recordSaga(workerValidateToken);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerValidateToken);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_TOKEN, FAILED), error: failedResponse });
  });

  it('Refresh jwt-token', async () => {
    let dispatched = await recordSaga(workerRefreshToken);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_TOKEN, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerRefreshToken);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_TOKEN, FAILED), error: failedResponse });
  });

  it('Destroy jwt-token', async () => {
    let dispatched = await recordSaga(workerDestroyToken);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_TOKEN, SUCCESS) });

    dispatched = await recordSaga(workerDestroyToken);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_TOKEN, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_TOKEN, FAILED), error: failedResponse });
  });
});
