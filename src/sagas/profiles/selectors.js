import { GET_PROFILE, UPDATE_PROFILE } from './actions';

const selectReducer = state => state.profile;

// Data
export const selectProfile = state => selectReducer(state).profile;

// Requests
const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetProfileReq = state => selectRequestsFor(state, GET_PROFILE);
export const selectUpdateProfileReq = state => selectRequestsFor(state, UPDATE_PROFILE);
