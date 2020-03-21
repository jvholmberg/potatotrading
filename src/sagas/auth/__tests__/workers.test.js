import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import {
  workerGetJwt,
  workerValidateJwt,
  workerRefreshJwt,
  workerDestroyJwt,
} from '../workers';
import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
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
    let dispatched = await recordSaga(workerGetJwt, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetJwt, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(GET_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_JWT, FAILED), error: failedResponse });
  });

  it('Validate jwt-token', async () => {
    let dispatched = await recordSaga(workerValidateJwt);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerValidateJwt);
    expect(dispatched[0]).toEqual({ type: createAction(VALIDATE_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(VALIDATE_JWT, FAILED), error: failedResponse });
  });

  it('Refresh jwt-token', async () => {
    let dispatched = await recordSaga(workerRefreshJwt);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerRefreshJwt);
    expect(dispatched[0]).toEqual({ type: createAction(REFRESH_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(REFRESH_JWT, FAILED), error: failedResponse });
  });

  it('Destroy jwt-token', async () => {
    let dispatched = await recordSaga(workerDestroyJwt);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_JWT, SUCCESS) });

    dispatched = await recordSaga(workerDestroyJwt);
    expect(dispatched[0]).toEqual({ type: createAction(DESTROY_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DESTROY_JWT, FAILED), error: failedResponse });
  });
});
