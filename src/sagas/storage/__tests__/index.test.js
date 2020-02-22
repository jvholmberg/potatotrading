import * as index from '..';
import * as actions from '../actions';

describe('sagas/storage/index.js', () => {
  const value = 'value';

  it('set access token', () => {
    const actual = index.setAccessToken(value);
    const expected = {
      type: actions.SET_LOCAL_STORAGE,
      payload: { key: 'accessToken', value },
    };
    expect(actual).toEqual(expected);
  });

  it('set refresh token', () => {
    const actual = index.setRefreshToken(value);
    const expected = {
      type: actions.SET_LOCAL_STORAGE,
      payload: { key: 'refreshToken', value },
    };
    expect(actual).toEqual(expected);
  });

  it('get access token', () => {
    const actual = index.getAccessToken();
    const expected = {
      type: actions.GET_LOCAL_STORAGE,
      payload: { key: 'accessToken' },
    };
    expect(actual).toEqual(expected);
  });

  it('get refresh token', () => {
    const actual = index.getRefreshToken();
    const expected = {
      type: actions.GET_LOCAL_STORAGE,
      payload: { key: 'refreshToken' },
    };
    expect(actual).toEqual(expected);
  });

  it('delete access token', () => {
    const actual = index.deleteAccessToken();
    const expected = {
      type: actions.DELETE_LOCAL_STORAGE,
      payload: { key: 'accessToken' },
    };
    expect(actual).toEqual(expected);
  });

  it('delete refresh token', () => {
    const actual = index.deleteRefreshToken(value);
    const expected = {
      type: actions.DELETE_LOCAL_STORAGE,
      payload: { key: 'refreshToken' },
    };
    expect(actual).toEqual(expected);
  });
});
