import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './constants';

export const createUser = values => ({
  type: CREATE_USER,
  payload: values,
});

export const getMyUser = () => ({
  type: GET_MY_USER,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const updateUser = (id, values) => ({
  type: UPDATE_USER,
  payload: {
    id,
    values,
  },
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id,
});
