/* eslint-disable max-lines-per-function */
/* eslint-disable object-curly-newline */
import { lastDayOfMonth, startOfMonth } from 'date-fns';
import {
  CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES,
} from '../actions';
import * as selectors from '../selectors';

describe('sagas/sessions/selectors.js', () => {
  const getMockState = () => ({
    sessions: {
      sessions: {
        byId: {
          0: { id: 0, timestamp: new Date('2020-01-01'), typeId: 0, name: 'name 0', comment: 'comment 0' },
          1: { id: 1, timestamp: new Date('2020-01-15'), typeId: 1, name: 'name 1', comment: 'comment 1' },
          2: { id: 2, timestamp: new Date('2020-02-05'), typeId: 2, name: 'name 2', comment: 'comment 2' },
          3: { id: 3, timestamp: new Date('2020-02-10'), typeId: 3, name: 'name 3', comment: 'comment 3' },
        },
        allIds: [0, 1, 2, 3],
      },
      sessionTypes: {
        byId: {
          0: { id: 0, name: 'type 0' },
          1: { id: 1, name: 'type 1' },
          2: { id: 2, name: 'type 2' },
          3: { id: 3, name: 'type 3' },
        },
        allIds: [0, 1, 2, 3],
      },
      requests: {
        [CREATE_SESSION]: { pending: false, done: false, error: null },
        [GET_SESSIONS]: { pending: false, done: true, error: null },
        [GET_SESSION_TYPES]: { pending: false, done: true, error: null },
      },
    },
  });

  // Sessions
  it('select session ids', () => {
    const actual = selectors.selectSessionIds(getMockState());
    const expected = getMockState().sessions.sessions.allIds;
    expect(actual).toEqual(expected);
  });

  it('select sessions', () => {
    const actual = selectors.selectSessions(getMockState());
    const expected = getMockState().sessions.sessions.byId;
    expect(actual).toEqual(expected);
  });

  it('select session by id', () => {
    const sessionId = 0;
    const actual = selectors.selectSessionById(getMockState(), sessionId);
    const expected = getMockState().sessions.sessions.byId[sessionId];
    expect(actual).toEqual(expected);
  });

  // Session types
  it('select session-type ids', () => {
    const actual = selectors.selectSessionTypeIds(getMockState());
    const expected = getMockState().sessions.sessionTypes.allIds;
    expect(actual).toEqual(expected);
  });

  it('select session-types', () => {
    const actual = selectors.selectSessionTypes(getMockState());
    const expected = getMockState().sessions.sessionTypes.byId;
    expect(actual).toEqual(expected);
  });

  it('select session by id', () => {
    const sessionTypeId = 0;
    const actual = selectors.selectSessionTypeById(getMockState(), sessionTypeId);
    const expected = getMockState().sessions.sessionTypes.byId[sessionTypeId];
    expect(actual).toEqual(expected);
  });

  // Custom
  it('select session ids for period', () => {
    const now = new Date('2020-02-11');
    const actual = selectors.selectSessionIdsForPeriod(
      startOfMonth(now),
      lastDayOfMonth(now),
    )(getMockState());
    const expected = [2, 3];
    expect(actual).toEqual(expected);
  });

  it('select session ids grouped by type', () => {
    const actual = selectors.selectSessionIdsGroupedByType(getMockState());
    const expected = { 0: [0], 1: [1], 2: [2], 3: [3] };
    expect(actual).toEqual(expected);
  });

  it('select session ids of type', () => {
    const typeId = 0;
    const actual = selectors.selectSessionIdsOfType(getMockState(), typeId);
    const expected = [0];
    expect(actual).toEqual(expected);
  });

  // Requests
  it('select request for creating session', () => {
    const actual = selectors.selectCreateSessionReq(getMockState());
    const expected = getMockState().sessions.requests[CREATE_SESSION];
    expect(actual).toEqual(expected);
  });

  it('select request for getting sessions', () => {
    const actual = selectors.selectGetSessionsReq(getMockState());
    const expected = getMockState().sessions.requests[GET_SESSIONS];
    expect(actual).toEqual(expected);
  });

  it('select request for getting sessiontypes', () => {
    const actual = selectors.selectGetSessionTypesReq(getMockState());
    const expected = getMockState().sessions.requests[GET_SESSION_TYPES];
    expect(actual).toEqual(expected);
  });
});
