import {
  CHANGE_PASSWORD,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';

export const changePassword = values => ({
  type: CHANGE_PASSWORD,
  payload: values,
});

export const updatePrivacySettings = values => ({
  type: UPDATE_PRIVACY,
  payload: values,
});

export const updateNotificationsSettings = values => ({
  type: UPDATE_NOTIFICAIONS,
  payload: values,
});
