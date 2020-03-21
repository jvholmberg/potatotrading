import {
  selectScreen,
  selectScreenSize,
  selectIsDesktop,
  selectIsHandheld,
  selectSidebar,
  selectSidebarOpen,
  selectSortingDiary
} from '../selectors';
import { reducerName } from '../constants';
import { SORT_DIRECTION_DESCENDING } from '../../constants';

describe('sagas/auth/selectors.js', () => {
  const getMockState = () => ({
    ui: {
      screen: { size: 'size' },
      sidebar: { open: false },
      sorting: {
        diary: {
          key: 'key',
          direction: SORT_DIRECTION_DESCENDING,
        }
      },
    },
  });

  it('selects screen', () => {
    const actual = selectScreen(getMockState());
    const expected = getMockState()[reducerName].screen;
    expect(actual).toEqual(expected);
  });

  it('selects screen size', () => {
    const actual = selectScreenSize(getMockState());
    const expected = getMockState()[reducerName].screen.size;
    expect(actual).toEqual(expected);
  });

  it('check if desktop', () => {
    const actual = selectIsDesktop(getMockState());
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('check if handheld', () => {
    const actual = selectIsHandheld(getMockState());
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('selects sidebar', () => {
    const actual = selectSidebar(getMockState());
    const expected = getMockState()[reducerName].sidebar;
    expect(actual).toEqual(expected);
  });

  it('selects sidbar open state', () => {
    const actual = selectSidebarOpen(getMockState());
    const expected = getMockState()[reducerName].sidebar.open;
    expect(actual).toEqual(expected);
  });

  it('selects sidbar open state', () => {
    const actual = selectSortingDiary(getMockState());
    const expected = getMockState()[reducerName].sorting.diary;
    expect(actual).toEqual(expected);
  });
});
