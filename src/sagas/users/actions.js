
export const CREATE_USER = 'CREATE_USER';
export const createUser = values => ({
  type: CREATE_USER,
  payload: values,
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id,
});
