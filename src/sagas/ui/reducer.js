/* eslint-disable default-case */
import produce from 'immer';
import _ from 'lodash';
import { SIDEBAR_OPEN, SCREEN_SIZE } from './actions';
import { getActionType, getActionName, UI } from '../actionCreator';

export const getInitialState = () => ({
  screen: { size: null },
  sidebar: { open: false },
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
  }
  return draft;
});
