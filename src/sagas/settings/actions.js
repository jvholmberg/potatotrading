import {
  GET_SETTINGS,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';

export const getUserSettings = () => ({
  type: GET_SETTINGS,
});

export const updatePrivacySettings = values => ({
  type: UPDATE_PRIVACY,
  payload: values,
});

export const updateNotificationsSettings = values => ({
  type: UPDATE_NOTIFICAIONS,
  payload: values,
});
