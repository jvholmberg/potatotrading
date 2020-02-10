export const GET_PROFILE = 'GET_PROFILE';
export const getProfile = id => ({
  type: GET_PROFILE,
  payload: id,
});

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfile = (id, values) => ({
  type: UPDATE_PROFILE,
  payload: { id, values },
});
