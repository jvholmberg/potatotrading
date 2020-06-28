import {
  GET_SETTINGS,
  UPDATE_NOTIFICAIONS,
  EDIT_GRAPHS,
} from './constants';

export const getUserSettings = () => ({
  type: GET_SETTINGS,
});

export const updateNotificationsSettings = values => ({
  type: UPDATE_NOTIFICAIONS,
  payload: values,
});

export const editGraphsSettings = values => ({
  type: EDIT_GRAPHS,
  payload: values,
});
