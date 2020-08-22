import {
  reducerName,
  LOAD_TOKEN,
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  CHANGE_PASSWORD,
} from './constants';

const selectReducer = state => state[reducerName];

const selectToken = state => selectReducer(state).token;
export const selectAccessToken = state => selectToken(state).access_token;
export const selectRefreshToken = state => selectToken(state).refresh_token;
export const selectTokenType = state => selectToken(state).token_type;
export const selectValidUntil = state => selectToken(state).valid_until;
export const selectExpiresIn = state => selectToken(state).expires_in;

export const selectIsLoggedIn = state => selectAccessToken(state) !== null;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectLoadTokenTask = state => selectRequestsFor(state, LOAD_TOKEN);
export const selectGetTokenReq = state => selectRequestsFor(state, GET_TOKEN);
export const selectValidateTokenReq = state => selectRequestsFor(state, VALIDATE_TOKEN);
export const selectRefreshTokenReq = state => selectRequestsFor(state, REFRESH_TOKEN);
export const selectDestroyTokenReq = state => selectRequestsFor(state, DESTROY_TOKEN);
export const selectChangePasswordReq = state => selectRequestsFor(state, CHANGE_PASSWORD);
