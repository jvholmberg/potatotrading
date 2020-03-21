import {
  reducerName,
  GET_PROFILE,
  UPDATE_PROFILE,
} from './constants';

const selectReducer = state => state[reducerName];

export const selectProfile = state => selectReducer(state).profile;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetProfileReq = state => selectRequestsFor(state, GET_PROFILE);
export const selectUpdateProfileReq = state => selectRequestsFor(state, UPDATE_PROFILE);
