import { SORT_DIRECTION_DESCENDING } from '../../../../../sagas/constants';
import {
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from '../../../../../sagas/sessions/constants';
import * as selectors from '../SessionTable.selectors';

describe('routes/Diary/components/SessionTable.selectors.js', () => {
  const getMockState = () => ({
    sessions: {
      sessions: {
        byId: {
          0: { timestamp: 2 },
          1: { timestamp: 1 },
          2: { timestamp: 3 },
        },
        allIds: [0, 1, 2],
      },
      sessionTypes: { byId: {}, allIds: [] },
      requests: {
        [GET_SESSIONS]: { pending: false, done: false, error: null },
        [GET_SESSION_TYPES]: { pending: false, done: false, error: 'error' },
      },
    },
    ui: {
      sorting: {
        diary: { key: 'timestamp', direction: SORT_DIRECTION_DESCENDING },
      },
    }
  });

  // Screen
  it('selects fetching', () => {
    const actual = selectors.selectIsFetching(getMockState());
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('selects error', () => {
    const actual = selectors.selectFetchError(getMockState());
    const expected = 'error';
    expect(actual).toEqual(expected);
  });

  it('selects sorted session ids', () => {
    const actual = selectors.selectSessionsIdsSorted(getMockState());
    const expected = [2, 0, 1];
    expect(actual).toEqual(expected);
  });
});
