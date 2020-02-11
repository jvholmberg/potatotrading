export const GET_JWT = 'GET_JWT';
export const getJwt = values => ({
  type: GET_JWT,
  payload: values,
});

export const VALIDATE_JWT = 'VALIDATE_JWT';
export const validateJwt = () => ({
  type: VALIDATE_JWT,
});

export const REFRESH_JWT = 'REFRESH_JWT';
export const refreshJwt = () => ({
  type: REFRESH_JWT,
});

export const DESTROY_JWT = 'DESTROY_JWT';
export const destroyJwt = () => ({
  type: DESTROY_JWT,
});
