import {
  reducerName,
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT,
  CHANGE_PASSWORD,
} from './constants';

const selectReducer = state => state[reducerName];

const selectToken = state => selectReducer(state).token;
export const selectAccessToken = state => selectToken(state).accessToken;
export const selectRefreshToken = state => selectToken(state).refreshToken;
export const selectValidUntil = state => selectToken(state).validUntil;
export const selectExpiresIn = state => selectToken(state).expiresIn;

export const selectIsLoggedIn = state => selectAccessToken(state) !== null;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectGetJwtReq = state => selectRequestsFor(state, GET_JWT);
export const selectValidateJwtReq = state => selectRequestsFor(state, VALIDATE_JWT);
export const selectRefreshJwtReq = state => selectRequestsFor(state, REFRESH_JWT);
export const selectDestroyJwtReq = state => selectRequestsFor(state, DESTROY_JWT);
export const selectChangePasswordReq = state => selectRequestsFor(state, CHANGE_PASSWORD);
