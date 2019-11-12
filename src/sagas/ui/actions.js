export const SCREEN_SIZE = 'SCREEN_SIZE';
export const setScreenSize = size => ({
  type: SCREEN_SIZE,
  payload: size,
});

export const SIDEBAR_OPEN = 'SIDEBAR_OPEN';
export const setSidebarOpen = open => ({
  type: SIDEBAR_OPEN,
  payload: open,
});
