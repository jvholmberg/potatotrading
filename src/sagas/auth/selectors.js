import {
  GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT
} from './actions';

const selectReducer = state => state.auth;

// Data
const selectToken = state => selectReducer(state).token;
export const selectAccessToken = state => selectToken(state).accessToken;
export const selectRefreshToken = state => selectToken(state).refreshToken;
export const selectValidUntil = state => selectToken(state).validUntil;
export const selectExpiresIn = state => selectToken(state).expiresIn;

// Utils
export const selectIsLoggedIn = state => selectAccessToken(state) !== null;

// Requests
const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetJwtReq = state => selectRequestsFor(state, GET_JWT);
export const selectValidateJwtReq = state => selectRequestsFor(state, VALIDATE_JWT);
export const selectRefreshJwtReq = state => selectRequestsFor(state, REFRESH_JWT);
export const selectDestroyJwtReq = state => selectRequestsFor(state, DESTROY_JWT);
