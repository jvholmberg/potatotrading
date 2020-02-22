import * as actions from '../actions';

describe('sagas/storage/actions.js', () => {
  const key = 'key';
  const value = 'value';

  describe('local storage', () => {
    it('set', () => {
      const actual = actions.setLocalStorage(key, value);
      const expected = { type: actions.SET_LOCAL_STORAGE, payload: { key, value } };
      expect(actual).toEqual(expected);
    });

    it('get', () => {
      const actual = actions.getLocalStorage(key);
      const expected = { type: actions.GET_LOCAL_STORAGE, payload: { key } };
      expect(actual).toEqual(expected);
    });

    it('delete', () => {
      const actual = actions.deleteLocalStorage(key);
      const expected = { type: actions.DELETE_LOCAL_STORAGE, payload: { key } };
      expect(actual).toEqual(expected);
    });
  });

  describe('session storage', () => {
    it('set', () => {
      const actual = actions.setSessionStorage(key, value);
      const expected = { type: actions.SET_SESSION_STORAGE, payload: { key, value } };
      expect(actual).toEqual(expected);
    });

    it('get', () => {
      const actual = actions.getSessionStorage(key);
      const expected = { type: actions.GET_SESSION_STORAGE, payload: { key } };
      expect(actual).toEqual(expected);
    });

    it('delete', () => {
      const actual = actions.deleteSessionStorage(key);
      const expected = { type: actions.DELETE_SESSION_STORAGE, payload: { key } };
      expect(actual).toEqual(expected);
    });
  });
});
