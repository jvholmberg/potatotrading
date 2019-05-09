import { CALL_API } from '../middleware/api'

/**
 * Login user
 */
export const GET_JWT = 'GET_JWT';
export const getJwt = (values, options = {}) => ({
  [CALL_API]: {
    type: GET_JWT,
    url: `/api/users/auth`,
    method: 'POST',
    body: values,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});

/**
 * Validate jwt-token
 */
export const VALIDATE_JWT = 'VALIDATE_JWT';
export const validateJwt = (options = {}) => ({
  [CALL_API]: {
    type: VALIDATE_JWT,
    url: `/api/users/auth`,
    method: 'GET',
    restricted: true,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});

/**
 * Refresh jwt-token
 */
export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = (refreshToken, options = {}) => ({
  [CALL_API]: {
    type: REFRESH_JWT,
    url: `/api/users/auth/${refreshToken}`,
    method: 'GET',
    restricted: true,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});

/**
 * Destroy jwt-token
 */
export const DESTROY_JWT = 'DESTROY_JWT';
export const destroyJwt = (options = {}) => ({
  [CALL_API]: {
    type: DESTROY_JWT,
    url: `/api/users/auth`,
    method: 'DELETE',
    restricted: true,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});

/**
 * Get all users
 */
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = (options = {}) => ({
  [CALL_API]: {
    type: FETCH_USERS,
    url: `/api/users`,
    method: 'GET',
    restricted: true,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});

/**
 * Register user
 */
export const REGISTER_USER = 'REGISTER_USER';
export const register = (values, options = {}) => ({
  [CALL_API]: {
    type: REGISTER_USER,
    url: `/api/users`,
    method: 'POST',
    body: values,
    forceReq: options.force,
    deleteReq: options.delete,
  },
});
