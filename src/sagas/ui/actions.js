import {
  SCREEN_SIZE,
  SIDEBAR_OPEN,
  SORTING_DIARY,
} from './constants';

export const setScreenSize = size => ({
  type: SCREEN_SIZE,
  payload: size,
});

export const setSidebarOpen = open => ({
  type: SIDEBAR_OPEN,
  payload: open,
});

export const setSortingDiary = sortKey => ({
  type: SORTING_DIARY,
  payload: sortKey,
});
