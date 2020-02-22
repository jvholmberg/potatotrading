import _ from 'lodash';
import * as selectors from '../selectors';

describe('sagas/auth/selectors.js', () => {
  const mockState = {
    ui: {
      screen: { size: 'size' },
      sidebar: { open: false },
    },
  };

  // Screen
  it('selects screen', () => {
    const actual = selectors.selectScreen(mockState);
    const expected = _.get(mockState, 'ui.screen');
    expect(actual).toEqual(expected);
  });

  it('selects screen size', () => {
    const actual = selectors.selectScreenSize(mockState);
    const expected = _.get(mockState, 'ui.screen.size');
    expect(actual).toEqual(expected);
  });

  it('check if desktop', () => {
    const actual = selectors.selectIsDesktop(mockState);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('check if handheld', () => {
    const actual = selectors.selectIsHandheld(mockState);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  // Sidebar
  it('selects sidebar', () => {
    const actual = selectors.selectSidebar(mockState);
    const expected = _.get(mockState, 'ui.sidebar');
    expect(actual).toEqual(expected);
  });

  it('selects sidbar open state', () => {
    const actual = selectors.selectSidebarOpen(mockState);
    const expected = _.get(mockState, 'ui.sidebar.open');
    expect(actual).toEqual(expected);
  });
});
