import sinon from 'sinon';
import { recordSaga } from '../../../utils/reduxSaga';
import * as Api from '../../../utils/api';
import * as workers from '../workers';
import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
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

  it('Create user', async () => {
    const input = { username: 'user@domain.com', password: '123' };
    let dispatched = await recordSaga(workers.workerCreateUser, {}, input);
    expect(dispatched[0]).toEqual({ type: createRequestAction(CREATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(CREATE_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerCreateUser, {}, input);
    expect(dispatched[0]).toEqual({ type: createRequestAction(CREATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(CREATE_USER, FAILED), error: failedResponse });
  });

  it('Get my user', async () => {
    let dispatched = await recordSaga(workers.workerGetMyUser);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_MY_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_MY_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerGetMyUser);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_MY_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_MY_USER, FAILED), error: failedResponse });
  });

  it('Get users', async () => {
    let dispatched = await recordSaga(workers.workerGetUsers);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_USERS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_USERS, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerGetUsers);
    expect(dispatched[0]).toEqual({ type: createRequestAction(GET_USERS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(GET_USERS, FAILED), error: failedResponse });
  });

  it('Update user', async () => {
    const action = {
      payload: {
        id: 0,
        values: {
          username: 'updated@domain.com',
          password: '123',
        },
      },
    };
    let dispatched = await recordSaga(workers.workerUpdateUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createRequestAction(UPDATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(UPDATE_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workers.workerUpdateUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createRequestAction(UPDATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(UPDATE_USER, FAILED), error: failedResponse });
  });

  it('Delete user', async () => {
    const action = { payload: 0 };
    let dispatched = await recordSaga(workers.workerDeleteUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createRequestAction(DELETE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(DELETE_USER, SUCCESS) });

    dispatched = await recordSaga(workers.workerDeleteUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createRequestAction(DELETE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createRequestAction(DELETE_USER, FAILED), error: failedResponse });
  });
});
