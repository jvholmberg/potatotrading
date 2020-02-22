import _ from 'lodash';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT,
} from '../actions';
import * as selectors from '../selectors';

describe('sagas/auth/selectors.js', () => {
  const mockState = {
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
  };

  // Data
  it('selects accesstoken', () => {
    const actual = selectors.selectAccessToken(mockState);
    const expected = _.get(mockState, 'auth.token.accessToken');
    expect(actual).toEqual(expected);
  });

  it('selects refreshtoken', () => {
    const actual = selectors.selectRefreshToken(mockState);
    const expected = _.get(mockState, 'auth.token.refreshToken');
    expect(actual).toEqual(expected);
  });

  it('selects validuntil', () => {
    const actual = selectors.selectValidUntil(mockState);
    const expected = _.get(mockState, 'auth.token.validUntil');
    expect(actual).toEqual(expected);
  });

  it('selects expiresin', () => {
    const actual = selectors.selectExpiresIn(mockState);
    const expected = _.get(mockState, 'auth.token.expiresIn');
    expect(actual).toEqual(expected);
  });

  // Utils
  it('determine if loggedin', () => {
    const actual = selectors.selectIsLoggedIn(mockState);
    const expected = true
    expect(actual).toEqual(expected);
  });

  // Requests
  it('select request for login', () => {
    const actual = selectors.selectGetJwtReq(mockState);
    const expected = _.get(mockState, `auth.requests.${GET_JWT}`);
    expect(actual).toEqual(expected);
  });

  it('select request for validate login', () => {
    const actual = selectors.selectValidateJwtReq(mockState);
    const expected = _.get(mockState, `auth.requests.${VALIDATE_JWT}`);
    expect(actual).toEqual(expected);
  });

  it('select request for refreshing login', () => {
    const actual = selectors.selectRefreshJwtReq(mockState);
    const expected = _.get(mockState, `auth.requests.${REFRESH_JWT}`);
    expect(actual).toEqual(expected);
  });

  it('select request for logout', () => {
    const actual = selectors.selectDestroyJwtReq(mockState);
    const expected = _.get(mockState, `auth.requests.${DESTROY_JWT}`);
    expect(actual).toEqual(expected);
  });
});
