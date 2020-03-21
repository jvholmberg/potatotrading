import {
  createSession,
  getSessions,
  getSessionTypes,
} from '../actions';
import {
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from '../constants';

describe('sagas/sessions/actions.js', () => {
  it('createSession()', () => {
    const session = {
      timestamp: 1580252400000,
      typeId: 0,
      name: 'name',
      comment: 'comment',
    };
    const actual = createSession(session);
    const expected = { type: CREATE_SESSION, payload: session };
    expect(actual).toEqual(expected);
  });

  it('getSessions()', () => {
    const actual = getSessions();
    const expected = { type: GET_SESSIONS };
    expect(actual).toEqual(expected);
  });

  it('getSessionTypes()', () => {
    const actual = getSessionTypes();
    const expected = { type: GET_SESSION_TYPES };
    expect(actual).toEqual(expected);
  });
});
