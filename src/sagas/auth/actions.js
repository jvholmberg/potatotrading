
import {
  LOAD_TOKEN,
  GET_TOKEN,
  VALIDATE_TOKEN,
  REFRESH_TOKEN,
  DESTROY_TOKEN,
  CHANGE_PASSWORD,
} from './constants';

export const loadToken = () => ({
  type: LOAD_TOKEN,
});

export const getToken = values => ({
  type: GET_TOKEN,
  payload: values,
});

export const validateToken = () => ({
  type: VALIDATE_TOKEN,
});

export const refreshToken = () => ({
  type: REFRESH_TOKEN,
});

export const destroyToken = () => ({
  type: DESTROY_TOKEN,
});

export const changePassword = values => ({
  type: CHANGE_PASSWORD,
  payload: values,
});
