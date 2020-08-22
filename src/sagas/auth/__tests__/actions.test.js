import {
  getToken,
  validateToken,
  refreshToken,
  destroyToken,
} from '../actions';
import {
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
} from '../constants';

describe('sagas/auth/actions.js', () => {
  it('login', () => {
    const input = { username: 'user@domain.com', password: '123' };
    const actual = getToken(input);
    const expected = { type: GET_TOKEN, payload: input };
    expect(actual).toEqual(expected);
  });

  it('validate tokens', () => {
    const actual = validateToken();
    const expected = { type: VALIDATE_TOKEN };
    expect(actual).toEqual(expected);
  });

  it('refresh tokens', () => {
    const actual = refreshToken();
    const expected = { type: REFRESH_TOKEN };
    expect(actual).toEqual(expected);
  });

  it('logout', () => {
    const actual = destroyToken();
    const expected = { type: DESTROY_TOKEN };
    expect(actual).toEqual(expected);
  });
});
