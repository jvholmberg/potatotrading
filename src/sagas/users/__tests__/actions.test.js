import * as actions from '../actions';

describe('sagas/users/actions.js', () => {
  it('Create user', () => {
    const input = { username: 'user@domain.com', password: '123', passwordVerify: '123' };
    const actual = actions.createUser(input);
    const expected = { type: actions.CREATE_USER, payload: input };
    expect(actual).toEqual(expected);
  });

  it('Get my user', () => {
    const actual = actions.getMyUser();
    const expected = { type: actions.GET_MY_USER };
    expect(actual).toEqual(expected);
  });

  it('Get users', () => {
    const actual = actions.getUsers();
    const expected = { type: actions.GET_USERS };
    expect(actual).toEqual(expected);
  });

  it('Update user', () => {
    const param0 = 0;
    const param1 = { username: 'user@domain.com', password: '123' };
    const actual = actions.updateUser(param0, param1);
    const expected = { type: actions.UPDATE_USER, payload: { id: param0, values: param1 } };
    expect(actual).toEqual(expected);
  });

  it('Delete user', () => {
    const input = 0;
    const actual = actions.deleteUser(input);
    const expected = { type: actions.DELETE_USER, payload: input };
    expect(actual).toEqual(expected);
  });
});
