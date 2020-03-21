import {
  getJwt,
  validateJwt,
  refreshJwt,
  destroyJwt,
} from '../actions';
import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
} from '../constants';

describe('sagas/auth/actions.js', () => {
  it('login', () => {
    const input = { username: 'user@domain.com', password: '123' };
    const actual = getJwt(input);
    const expected = { type: GET_JWT, payload: input };
    expect(actual).toEqual(expected);
  });

  it('validate tokens', () => {
    const actual = validateJwt();
    const expected = { type: VALIDATE_JWT };
    expect(actual).toEqual(expected);
  });

  it('refresh tokens', () => {
    const actual = refreshJwt();
    const expected = { type: REFRESH_JWT };
    expect(actual).toEqual(expected);
  });

  it('logout', () => {
    const actual = destroyJwt();
    const expected = { type: DESTROY_JWT };
    expect(actual).toEqual(expected);
  });
});
