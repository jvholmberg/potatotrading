import * as actions from '../actions';

describe('sagas/ui/actions.js', () => {
  it('set screen size', () => {
    const size = 'size';
    const actual = actions.setScreenSize(size);
    const expected = { type: actions.SCREEN_SIZE, payload: size };
    expect(actual).toEqual(expected);
  });

  it('set sidebar open', () => {
    const open = true;
    const actual = actions.setSidebarOpen(open);
    const expected = { type: actions.SIDEBAR_OPEN, payload: open };
    expect(actual).toEqual(expected);
  });
});
