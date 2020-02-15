import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import * as workers from '../workers';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT,
} from '../actions';
import {
  createRequestAction, PENDING, SUCCESS, FAILED,
} from '../../actionCreator';

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

  it('workerGetJwt()', async () => {
    const input = { username: 'user@domain.com', password: '123' };
    let dispatched = await recordSaga(workers.workerGetJwt, input);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerGetJwt, input);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_JWT, FAILED), error: failedResponse });
  });

  it('workerValidateJwt()', async () => {
    let dispatched = await recordSaga(workers.workerValidateJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(VALIDATE_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(VALIDATE_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerValidateJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(VALIDATE_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(VALIDATE_JWT, FAILED), error: failedResponse });
  });

  it('workerRefreshJwt()', async () => {
    let dispatched = await recordSaga(workers.workerRefreshJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(REFRESH_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(REFRESH_JWT, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerRefreshJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(REFRESH_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(REFRESH_JWT, FAILED), error: failedResponse });
  });

  it('workerDestroyJwt()', async () => {
    let dispatched = await recordSaga(workers.workerDestroyJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(DESTROY_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(DESTROY_JWT, SUCCESS) });

    dispatched = await recordSaga(workers.workerDestroyJwt);
    expect(dispatched[0]).toEqual({ type: createRequestAction(DESTROY_JWT, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(DESTROY_JWT, FAILED), error: failedResponse });
  });
});
