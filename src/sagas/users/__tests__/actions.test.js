import {
  createUser,
  getMyUser,
  getUsers,
  updateUser,
  deleteUser
} from '../actions';
import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER
} from '../constants';

describe('sagas/users/actions.js', () => {
  it('Create user', () => {
    const input = { username: 'user@domain.com', password: '123', passwordVerify: '123' };
    const actual = createUser(input);
    const expected = { type: CREATE_USER, payload: input };
    expect(actual).toEqual(expected);
  });

  it('Get my user', () => {
    const actual = getMyUser();
    const expected = { type: GET_MY_USER };
    expect(actual).toEqual(expected);
  });

  it('Get users', () => {
    const actual = getUsers();
    const expected = { type: GET_USERS };
    expect(actual).toEqual(expected);
  });

  it('Update user', () => {
    const param0 = 0;
    const param1 = { username: 'user@domain.com', password: '123' };
    const actual = updateUser(param0, param1);
    const expected = { type: UPDATE_USER, payload: { id: param0, values: param1 } };
    expect(actual).toEqual(expected);
  });

  it('Delete user', () => {
    const input = 0;
    const actual = deleteUser(input);
    const expected = { type: DELETE_USER, payload: input };
    expect(actual).toEqual(expected);
  });
});
