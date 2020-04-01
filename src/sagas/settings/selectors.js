import {
  reducerName,
  GET_SETTINGS,
  UPDATE_PRIVACY,
  UPDATE_NOTIFICAIONS,
} from './constants';

const selectReducer = state => state[reducerName];

export const selectPrivacySettings = state => selectReducer(state).privacy;
export const selectNotificationsSettings = state => selectReducer(state).accessToken;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetSettingsReq = state => selectRequestsFor(state, GET_SETTINGS);
export const selectUpdatePrivacySettingsReq = state => selectRequestsFor(state, UPDATE_PRIVACY);
export const selectUpdateNotificationsSettingsReq = state => selectRequestsFor(state, UPDATE_NOTIFICAIONS);
