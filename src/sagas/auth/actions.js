export const GET_JWT = 'GET_JWT';
export const getJwt = values => ({
  type: GET_JWT,
  payload: values,
});

export const VALIDATE_JWT = 'VALIDATE_JWT';
export const validateJwt = values => ({
  type: VALIDATE_JWT,
  payload: values,
});

export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = values => ({
  type: REFRESH_JWT,
  payload: values,
});

export const DESTROY_JWT = 'DESTROY_JWT';
export const destroyJwt = values => ({
  type: DESTROY_JWT,
  payload: values,
});
