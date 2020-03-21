import {
  reducerName,
  CHANGE_PASSWORD,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';

const selectReducer = state => state[reducerName];

export const selectPrivacySettings = state => selectReducer(state).privacy;
export const selectNotificationsSettings = state => selectReducer(state).accessToken;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectChangePasswordReq = state => selectRequestsFor(state, CHANGE_PASSWORD);
export const selectUpdatePrivacySettingsReq = state => selectRequestsFor(state, UPDATE_PRIVACY);
export const selectUpdateNotificationsSettingsReq = state => selectRequestsFor(state, UPDATE_NOTIFICAIONS);
