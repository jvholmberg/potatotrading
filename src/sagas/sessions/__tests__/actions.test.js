import * as actions from '../actions';

describe('sagas/sessions/actions.js', () => {
  it('createSession()', () => {
    const session = {
      timestamp: 1580252400000,
      typeId: 0,
      name: 'name',
      comment: 'comment',
    };
    const actual = actions.createSession(session);
    const expected = { type: actions.CREATE_SESSION, payload: session };
    expect(actual).toEqual(expected);
  });

  it('getSessions()', () => {
    const actual = actions.getSessions();
    const expected = { type: actions.GET_SESSIONS };
    expect(actual).toEqual(expected);
  });

  it('getSessionTypes()', () => {
    const actual = actions.getSessionTypes();
    const expected = { type: actions.GET_SESSION_TYPES };
    expect(actual).toEqual(expected);
  });
});