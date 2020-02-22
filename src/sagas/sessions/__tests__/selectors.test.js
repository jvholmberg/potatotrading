/* eslint-disable object-curly-newline */
import _ from 'lodash';
import { lastDayOfMonth, startOfMonth } from 'date-fns';
import {
  CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES,
} from '../actions';
import * as selectors from '../selectors';

describe('sagas/sessions/selectors.js', () => {
  const data = [
    { id: 0, timestamp: new Date('2020-01-01'), typeId: 0, name: 'name 0', comment: 'comment 0' },
    { id: 1, timestamp: new Date('2020-01-15'), typeId: 1, name: 'name 1', comment: 'comment 1' },
    { id: 2, timestamp: new Date('2020-02-05'), typeId: 2, name: 'name 2', comment: 'comment 2' },
    { id: 3, timestamp: new Date('2020-02-10'), typeId: 3, name: 'name 3', comment: 'comment 3' },
  ];
  const types = [
    { id: 0, name: 'type 0' },
    { id: 1, name: 'type 1' },
    { id: 2, name: 'type 2' },
    { id: 3, name: 'type 3' },
  ];
  const mockState = {
    sessions: {
      data,
      types,
      requests: {
        [CREATE_SESSION]: { pending: false, done: false, error: null },
        [GET_SESSIONS]: { pending: false, done: true, error: null },
        [GET_SESSION_TYPES]: { pending: false, done: true, error: null },
      },
    },
  };

  // Data
  it('select sessions', () => {
    const actual = selectors.selectSessions(mockState);
    const expected = mockState.sessions.data;
    expect(actual).toEqual(expected);
  });

  it('select sessiontypes', () => {
    const actual = selectors.selectSessionTypes(mockState);
    const expected = mockState.sessions.types;
    expect(actual).toEqual(expected);
  });

  it('select sessions for period', () => {
    const now = new Date('2020-02-11');
    const actual = selectors.selectSessionsForPeriod(
      startOfMonth(now),
      lastDayOfMonth(now),
    )(mockState);
    const expected = [data[2], data[3]];
    expect(actual).toEqual(expected);
  });

  it('select sessions with type', () => {
    const actual = selectors.selectSessionsWithType(mockState);
    const expected = _.map(data, ({ typeId, ...e }) => ({ ...e, type: types[typeId] }));
    expect(actual).toEqual(expected);
  });

  // Requests
  it('select request for creating session', () => {
    const actual = selectors.selectCreateSessionReq(mockState);
    const expected = mockState.sessions.requests[CREATE_SESSION];
    expect(actual).toEqual(expected);
  });

  it('select request for getting sessions', () => {
    const actual = selectors.selectGetSessionsReq(mockState);
    const expected = mockState.sessions.requests[GET_SESSIONS];
    expect(actual).toEqual(expected);
  });

  it('select request for getting sessiontypes', () => {
    const actual = selectors.selectGetSessionTypesReq(mockState);
    const expected = mockState.sessions.requests[GET_SESSION_TYPES];
    expect(actual).toEqual(expected);
  });
});
