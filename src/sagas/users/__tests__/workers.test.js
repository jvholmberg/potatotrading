import sinon from 'sinon';
import * as Api from '../../../utils/api';
import { recordSaga } from '../../../utils/reduxSaga';
import { createAction } from '../../sagaHelpers';
import {
  PENDING,
  SUCCESS,
  FAILED,
} from '../../constants';
import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from '../constants';
import {
  workerCreateUser,
  workerGetMyUser,
  workerGetUsers,
  workerUpdateUser,
  workerDeleteUser,
} from '../workers';

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
    let dispatched = await recordSaga(workerCreateUser, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(CREATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(CREATE_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerCreateUser, {}, input);
    expect(dispatched[0]).toEqual({ type: createAction(CREATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(CREATE_USER, FAILED), error: failedResponse });
  });

  it('Get my user', async () => {
    let dispatched = await recordSaga(workerGetMyUser);
    expect(dispatched[0]).toEqual({ type: createAction(GET_MY_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_MY_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetMyUser);
    expect(dispatched[0]).toEqual({ type: createAction(GET_MY_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_MY_USER, FAILED), error: failedResponse });
  });

  it('Get users', async () => {
    let dispatched = await recordSaga(workerGetUsers);
    expect(dispatched[0]).toEqual({ type: createAction(GET_USERS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_USERS, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerGetUsers);
    expect(dispatched[0]).toEqual({ type: createAction(GET_USERS, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(GET_USERS, FAILED), error: failedResponse });
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
    let dispatched = await recordSaga(workerUpdateUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createAction(UPDATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(UPDATE_USER, SUCCESS), payload: successResponse.data });

    dispatched = await recordSaga(workerUpdateUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createAction(UPDATE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(UPDATE_USER, FAILED), error: failedResponse });
  });

  it('Delete user', async () => {
    const action = { payload: 0 };
    let dispatched = await recordSaga(workerDeleteUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createAction(DELETE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DELETE_USER, SUCCESS) });

    dispatched = await recordSaga(workerDeleteUser, {}, action);
    expect(dispatched[0]).toEqual({ type: createAction(DELETE_USER, PENDING) });
    expect(dispatched[1]).toEqual({ type: createAction(DELETE_USER, FAILED), error: failedResponse });
  });
});
