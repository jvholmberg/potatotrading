import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from '../constants';
import {
  selectMyUser,
  selectOtherUsers,
  selectCreateUserReq,
  selectGetMyUserReq,
  selectGetUsersReq,
  selectUpdateUserReq,
  selectDeleteUserReq,
} from '../selectors';

describe('sagas/users/selectors.js', () => {
  const mockState = {
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
  };

  it('selects my user', () => {
    const actual = selectMyUser(mockState);
    const expected = mockState.users.my;
    expect(actual).toBe(expected);
  });

  it('select other users', () => {
    const actual = selectOtherUsers(mockState);
    const expected = mockState.users.others;
    expect(actual).toBe(expected);
  });

  it('select request for creating user', () => {
    const actual = selectCreateUserReq(mockState);
    const expected = mockState.users.requests[CREATE_USER];
    expect(actual).toEqual(expected);
  });

  it('select request for getting my user', () => {
    const actual = selectGetMyUserReq(mockState);
    const expected = mockState.users.requests[GET_MY_USER];
    expect(actual).toEqual(expected);
  });

  it('select request for getting users', () => {
    const actual = selectGetUsersReq(mockState);
    const expected = mockState.users.requests[GET_USERS];
    expect(actual).toEqual(expected);
  });

  it('selects request for updating user', () => {
    const actual = selectUpdateUserReq(mockState);
    const expected = mockState.users.requests[UPDATE_USER];
    expect(actual).toEqual(expected);
  });

  it('selects request for deleting user', () => {
    const actual = selectDeleteUserReq(mockState);
    const expected = mockState.users.requests[DELETE_USER];
    expect(actual).toEqual(expected);
  });
});
