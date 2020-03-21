import {
  setScreenSize,
  setSidebarOpen,
  setSortingDiary,
} from '../actions';
import {
  SCREEN_SIZE,
  SIDEBAR_OPEN,
  SORTING_DIARY,
} from '../constants';

describe('sagas/ui/actions.js', () => {
  it('set screen size', () => {
    const size = 'size';
    const actual = setScreenSize(size);
    const expected = { type: SCREEN_SIZE, payload: size };
    expect(actual).toEqual(expected);
  });

  it('set sidebar open', () => {
    const open = true;
    const actual = setSidebarOpen(open);
    const expected = { type: SIDEBAR_OPEN, payload: open };
    expect(actual).toEqual(expected);
  });

  it('set sorting diary', () => {
    const sortKey = 'sortKey';
    const actual = setSortingDiary(sortKey);
    const expected = { type: SORTING_DIARY, payload: sortKey };
    expect(actual).toEqual(expected);
  });
});
