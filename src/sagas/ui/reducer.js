/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import { SIDEBAR_OPEN, SCREEN_SIZE, SORTING_DIARY } from './actions';
import { getActionType, getActionName, UI } from '../actionCreator';
import { ASC, DESC } from '../constants';

export const getInitialState = () => ({
  screen: { size: null },
  sidebar: { open: false },
  sorting: {
    diary: { key: 'timestamp', direction: DESC },
  },
});

export default produce((draft = getInitialState(), action = {}) => {
  const { type, payload = null } = action;
  const actionType = getActionType(type);
  const actionName = getActionName(type);
  if (actionType !== UI) {
    return draft;
  }
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
      direction: draft.sorting.diary.key === payload && draft.sorting.diary.direction === DESC ? ASC : DESC,
    });
    break;
  }
  return draft;
});
