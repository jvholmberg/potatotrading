export const getJwtToken = () => {
  const jwt = window.localStorage.getItem('jwt');
  return jwt 
    ? JSON.parse(jwt)
    : undefined;
};

export const setJwtToken = (jwt) => {
  window.localStorage.setItem('jwt', JSON.stringify(jwt));
  return jwt;
};

export const removeJwtToken = () => {
  window.localStorage.removeItem('jwt');
  return undefined;
};