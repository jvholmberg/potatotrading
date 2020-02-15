import { fromJS } from 'immutable';
import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT,
} from '../actions';
import * as selectors from '../selectors';

describe('sagas/auth/selectors.js', () => {
  const mockState = fromJS({
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

  // Data
  it('selectAccessToken()', () => {
    const actual = selectors.selectAccessToken(mockState);
    const expected = mockState.getIn(['auth', 'token', 'accessToken']);
    expect(actual).toEqual(expected);
  });

  it('selectRefreshToken()', () => {
    const actual = selectors.selectRefreshToken(mockState);
    const expected = mockState.getIn(['auth', 'token', 'refreshToken']);
    expect(actual).toEqual(expected);
  });

  it('selectValidUntil()', () => {
    const actual = selectors.selectValidUntil(mockState);
    const expected = mockState.getIn(['auth', 'token', 'validUntil']);
    expect(actual).toEqual(expected);
  });

  it('selectExpiresIn()', () => {
    const actual = selectors.selectExpiresIn(mockState);
    const expected = mockState.getIn(['auth', 'token', 'expiresIn']);
    expect(actual).toEqual(expected);
  });

  // Utils
  it('selectIsLoggedIn()', () => {
    const actual = selectors.selectIsLoggedIn(mockState);
    const expected = true
    expect(actual).toEqual(expected);
  });

  // Requests
  it('selectGetJwtReq()', () => {
    const actual = selectors.selectGetJwtReq(mockState);
    const expected = mockState.getIn(['auth', 'requests', GET_JWT]);
    expect(actual).toEqual(expected);
  });

  it('selectValidateJwtReq()', () => {
    const actual = selectors.selectValidateJwtReq(mockState);
    const expected = mockState.getIn(['auth', 'requests', VALIDATE_JWT]);
    expect(actual).toEqual(expected);
  });

  it('selectRefreshJwtReq()', () => {
    const actual = selectors.selectRefreshJwtReq(mockState);
    const expected = mockState.getIn(['auth', 'requests', REFRESH_JWT]);
    expect(actual).toEqual(expected);
  });

  it('selectDestroyJwtReq()', () => {
    const actual = selectors.selectDestroyJwtReq(mockState);
    const expected = mockState.getIn(['auth', 'requests', DESTROY_JWT]);
    expect(actual).toEqual(expected);
  });
});
