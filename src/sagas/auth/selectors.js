import { GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT } from './actions';

const selectReducer = (state) => state.auth;
export const selectAccessToken = (state) => selectReducer(state).get('accessToken');
export const selectRefreshToken = (state) => selectReducer(state).get('refreshToken');
export const selectValidUntil = (state) => selectReducer(state).get('validUntil');
export const selectExpiresIn = (state) => selectReducer(state).get('expiresIn');

export const selectGetJwtReq = (state) => selectReducer(state).getIn(['requests', GET_JWT]);
export const selectValidateJwtReq = (state) => selectReducer(state).getIn(['requests', VALIDATE_JWT]);
export const selectRefreshJwtReq = (state) => selectReducer(state).getIn(['requests', REFRESH_JWT]);
export const selectDestroyJwtReq = (state) => selectReducer(state).getIn(['requests', DESTROY_JWT]);
