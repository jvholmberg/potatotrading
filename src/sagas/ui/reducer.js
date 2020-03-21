/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import {
  reducerName,
  SIDEBAR_OPEN,
  SCREEN_SIZE,
  SORTING_DIARY,
} from './constants';
import {
  getActionType,
  getActionName,
} from '../sagaHelpers';
import {
  SORT_DIRECTION_ASCENDING,
  SORT_DIRECTION_DESCENDING,
} from '../constants';

export const getInitialState = () => ({
  screen: { size: null },
  sidebar: { open: false },
  sorting: {
    diary: { key: 'timestamp', direction: SORT_DIRECTION_DESCENDING },
  },
});

export default produce((draft = getInitialState(), action = {}) => {
  const { type, payload = null } = action;
  const actionType = getActionType(type);
  if (actionType !== reducerName) {
    return draft;
  }
  const actionName = getActionName(type);
  switch (actionName) {
  case SCREEN_SIZE:
    _.set(draft, 'screen.size', payload);
    break;
  case SIDEBAR_OPEN:
    _.set(draft, 'sidebar.open', payload);
    break;
  case SORTING_DIARY:
    _.set(draft, 'sorting.diary', {
      key: payload,
      direction: draft.sorting.diary.key === payload && draft.sorting.diary.direction === SORT_DIRECTION_DESCENDING
        ? SORT_DIRECTION_ASCENDING
        : SORT_DIRECTION_DESCENDING,
    });
    break;
  }
  return draft;
});
