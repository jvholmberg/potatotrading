import { fromJS } from 'immutable';
import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
} from '../actions';
import * as selectors from '../selectors';

describe('sagas/users/selectors.js', () => {
  const mockState = fromJS({
    users: {
      my: null,
      others: null,
      requests: {
        [CREATE_USER]: { pending: false, done: false, error: null },
        [GET_MY_USER]: { pending: false, done: false, error: null },
        [GET_USERS]: { pending: false, done: false, error: null },
        [UPDATE_USER]: { pending: false, done: false, error: null },
        [DELETE_USER]: { pending: false, done: false, error: null },
      },
    },
  });

  // Data
  it('Selects my user', () => {
    const actual = selectors.selectMyUser(mockState);
    const expected = mockState.getIn(['users', 'my']);
    expect(actual).toBe(expected);
  });

  it('Select other users', () => {
    const actual = selectors.selectOtherUsers(mockState);
    const expected = mockState.getIn(['users', 'others']);
    expect(actual).toBe(expected);
  });

  // Requests
  it('Select request for creating user', () => {
    const actual = selectors.selectCreateUserReq(mockState);
    const expected = mockState.getIn(['users', 'requests', CREATE_USER]);
    expect(actual).toEqual(expected);
  });

  it('Select request for getting my user', () => {
    const actual = selectors.selectGetMyUserReq(mockState);
    const expected = mockState.getIn(['users', 'requests', GET_MY_USER]);
    expect(actual).toEqual(expected);
  });

  it('Select request for getting users', () => {
    const actual = selectors.selectGetUsersReq(mockState);
    const expected = mockState.getIn(['users', 'requests', GET_USERS]);
    expect(actual).toEqual(expected);
  });

  it('Selects request for updating user', () => {
    const actual = selectors.selectUpdateUserReq(mockState);
    const expected = mockState.getIn(['users', 'requests', UPDATE_USER]);
    expect(actual).toEqual(expected);
  });

  it('Selects request for deleting user', () => {
    const actual = selectors.selectDeleteUserReq(mockState);
    const expected = mockState.getIn(['users', 'requests', DELETE_USER]);
    expect(actual).toEqual(expected);
  });
});
