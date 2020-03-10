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

export const SORTING_DIARY = 'SORTING_DIARY';
export const setSortingDiary = sortKey => ({
  type: SORTING_DIARY,
  payload: sortKey,
});
