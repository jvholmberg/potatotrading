import {
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  reducerName,
} from '../constants';
import {
  selectAccessToken,
  selectRefreshToken,
  selectTokenType,
  selectValidUntil,
  selectExpiresIn,
  selectIsLoggedIn,
  selectGetTokenReq,
  selectValidateTokenReq,
  selectRefreshTokenReq,
  selectDestroyTokenReq,
} from '../selectors';

describe('sagas/auth/selectors.js', () => {
  const getMockState = () => ({
    auth: {
      token: {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        token_type: 'token_type',
        expires_in: 3600000,
        valid_until: '2021-01-01'
      },
      requests: {
        [GET_TOKEN]: { pending: true, done: false, error: null },
        [VALIDATE_TOKEN]: { pending: false, done: true, error: null },
        [REFRESH_TOKEN]: { pending: false, done: false, error: null },
        [DESTROY_TOKEN]: { pending: false, done: true, error: 'error' },
      },
    },
  });

  it('selects access-token', () => {
    const actual = selectAccessToken(getMockState());
    const expected = getMockState()[reducerName].token.access_token;
    expect(actual).toEqual(expected);
  });

  it('selects refresh-token', () => {
    const actual = selectRefreshToken(getMockState());
    const expected = getMockState()[reducerName].token.refresh_token;
    expect(actual).toEqual(expected);
  });

  it('selects token-type', () => {
    const actual = selectTokenType(getMockState());
    const expected = getMockState()[reducerName].token.token_type;
    expect(actual).toEqual(expected);
  });

  it('selects valid-until', () => {
    const actual = selectValidUntil(getMockState());
    const expected = getMockState()[reducerName].token.valid_until;
    expect(actual).toEqual(expected);
  });

  it('selects expires in', () => {
    const actual = selectExpiresIn(getMockState());
    const expected = getMockState()[reducerName].token.expires_in;
    expect(actual).toEqual(expected);
  });

  it('determine if loggedin', () => {
    const actual = selectIsLoggedIn(getMockState());
    const expected = true
    expect(actual).toEqual(expected);
  });

  it('select request for login', () => {
    const actual = selectGetTokenReq(getMockState());
    const expected = getMockState()[reducerName].requests[GET_TOKEN];
    expect(actual).toEqual(expected);
  });

  it('select request for validate login', () => {
    const actual = selectValidateTokenReq(getMockState());
    const expected = getMockState()[reducerName].requests[VALIDATE_TOKEN];
    expect(actual).toEqual(expected);
  });

  it('select request for refreshing login', () => {
    const actual = selectRefreshTokenReq(getMockState());
    const expected = getMockState()[reducerName].requests[REFRESH_TOKEN];
    expect(actual).toEqual(expected);
  });

  it('select request for logout', () => {
    const actual = selectDestroyTokenReq(getMockState());
    const expected = getMockState()[reducerName].requests[DESTROY_TOKEN];
    expect(actual).toEqual(expected);
  });
});
