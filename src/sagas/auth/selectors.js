import { GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT } from './actions';

const selectAuth = (state) => state.auth;
export const selectAccessToken = (state) => selectAuth(state).get('accessToken');
export const selectRefreshToken = (state) => selectAuth(state).get('refreshToken');
export const selectValidUntil = (state) => selectAuth(state).get('validUntil');
export const selectExpiresIn = (state) => selectAuth(state).get('expiresIn');

export const selectGetJwt = (state) => selectAuth(state).getIn(['requests', GET_JWT]);
export const selectValidateJwt = (state) => selectAuth(state).getIn(['requests', VALIDATE_JWT]);
export const selectRefreshJwt = (state) => selectAuth(state).getIn(['requests', REFRESH_JWT]);
export const selectDestroyJwt = (state) => selectAuth(state).getIn(['requests', DESTROY_JWT]);
