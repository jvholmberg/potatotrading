import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
  reducerName,
} from '../constants';
import {
  selectAccessToken,
  selectRefreshToken,
  selectValidUntil,
  selectExpiresIn,
  selectIsLoggedIn,
  selectGetJwtReq,
  selectValidateJwtReq,
  selectRefreshJwtReq,
  selectDestroyJwtReq,
} from '../selectors';

describe('sagas/auth/selectors.js', () => {
  const getMockState = () => ({
    auth: {
      token: {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        expiresIn: 3600000,
        validUntil: '2020-01-01'
      },
      requests: {
        [GET_JWT]: { pending: true, done: false, error: null },
        [VALIDATE_JWT]: { pending: false, done: true, error: null },
        [REFRESH_JWT]: { pending: false, done: false, error: null },
        [DESTROY_JWT]: { pending: false, done: true, error: 'error' },
      },
    },
  });

  it('selects accesstoken', () => {
    const actual = selectAccessToken(getMockState());
    const expected = getMockState()[reducerName].token.accessToken;
    expect(actual).toEqual(expected);
  });

  it('selects refreshtoken', () => {
    const actual = selectRefreshToken(getMockState());
    const expected = getMockState()[reducerName].token.refreshToken;
    expect(actual).toEqual(expected);
  });

  it('selects validuntil', () => {
    const actual = selectValidUntil(getMockState());
    const expected = getMockState()[reducerName].token.validUntil;
    expect(actual).toEqual(expected);
  });

  it('selects expiresin', () => {
    const actual = selectExpiresIn(getMockState());
    const expected = getMockState()[reducerName].token.expiresIn;
    expect(actual).toEqual(expected);
  });

  it('determine if loggedin', () => {
    const actual = selectIsLoggedIn(getMockState());
    const expected = true
    expect(actual).toEqual(expected);
  });

  it('select request for login', () => {
    const actual = selectGetJwtReq(getMockState());
    const expected = getMockState()[reducerName].requests[GET_JWT];
    expect(actual).toEqual(expected);
  });

  it('select request for validate login', () => {
    const actual = selectValidateJwtReq(getMockState());
    const expected = getMockState()[reducerName].requests[VALIDATE_JWT];
    expect(actual).toEqual(expected);
  });

  it('select request for refreshing login', () => {
    const actual = selectRefreshJwtReq(getMockState());
    const expected = getMockState()[reducerName].requests[REFRESH_JWT];
    expect(actual).toEqual(expected);
  });

  it('select request for logout', () => {
    const actual = selectDestroyJwtReq(getMockState());
    const expected = getMockState()[reducerName].requests[DESTROY_JWT];
    expect(actual).toEqual(expected);
  });
});
