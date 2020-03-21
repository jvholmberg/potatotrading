
import {
  GET_JWT,
  VALIDATE_JWT,
  REFRESH_JWT,
  DESTROY_JWT
} from './constants';

export const getJwt = values => ({
  type: GET_JWT,
  payload: values,
});

export const validateJwt = () => ({
  type: VALIDATE_JWT,
});

export const refreshJwt = () => ({
  type: REFRESH_JWT,
});

export const destroyJwt = () => ({
  type: DESTROY_JWT,
});
