import {
  reducerName,
  GET_SETTINGS,
  UPDATE_NOTIFICAIONS,
  EDIT_GRAPHS,
} from './constants';

const selectReducer = state => state[reducerName];

export const selectNotificationsSettings = state => selectReducer(state).accessToken;
export const selectGraphsSettings = state => selectReducer(state).graphs;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetSettingsReq = state => selectRequestsFor(state, GET_SETTINGS);
export const selectUpdateNotificationsSettingsReq = state => selectRequestsFor(state, UPDATE_NOTIFICAIONS);
export const selectEditGraphsSettingsReq = state => selectRequestsFor(state, EDIT_GRAPHS);
