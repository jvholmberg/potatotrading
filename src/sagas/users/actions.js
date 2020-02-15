
export const CREATE_USER = 'CREATE_USER';
export const createUser = values => ({
  type: CREATE_USER,
  payload: values,
});

export const GET_MY_USER = 'GET_MY_USER';
export const getMyUser = () => ({
  type: GET_MY_USER,
});

export const GET_USERS = 'GET_USERS';
export const getUsers = () => ({
  type: GET_USERS,
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (id, values) => ({
  type: UPDATE_USER,
  payload: {
    id,
    values,
  },
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id,
});
