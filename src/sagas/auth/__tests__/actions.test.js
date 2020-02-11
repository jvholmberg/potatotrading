import * as actions from '../actions';

describe('sagas/auth/actions.js', () => {
  it('getJwt()', () => {
    const input = { username: 'user@domain.com', password: '123' };
    const actual = actions.getJwt(input);
    const expected = { type: actions.GET_JWT, payload: input };
    expect(actual).toEqual(expected);
  });

  it('validateJwt()', () => {
    const actual = actions.validateJwt();
    const expected = { type: actions.VALIDATE_JWT };
    expect(actual).toEqual(expected);
  });

  it('refreshJwt()', () => {
    const actual = actions.refreshJwt();
    const expected = { type: actions.REFRESH_JWT };
    expect(actual).toEqual(expected);
  });

  it('destroyJwt()', () => {
    const actual = actions.destroyJwt();
    const expected = { type: actions.DESTROY_JWT };
    expect(actual).toEqual(expected);
  });
});
