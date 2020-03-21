import {
  GET_PROFILE,
  UPDATE_PROFILE,
} from './constants';

export const getProfile = id => ({
  type: GET_PROFILE,
  payload: id,
});

export const updateProfile = (id, values) => ({
  type: UPDATE_PROFILE,
  payload: { id, values },
});
