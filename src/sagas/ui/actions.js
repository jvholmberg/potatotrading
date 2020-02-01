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

export const SESSION_FORM_OPEN = 'SESSION_FORM_OPEN';
export const setSessionFormOpen = open => ({
  type: SESSION_FORM_OPEN,
  payload: open,
});
