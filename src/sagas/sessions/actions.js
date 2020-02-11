
export const CREATE_SESSION = 'CREATE_SESSION';
export const createSession = session => ({
  type: CREATE_SESSION,
  payload: session,
});

export const GET_SESSIONS = 'GET_SESSIONS';
export const getSessions = () => ({
  type: GET_SESSIONS,
});

export const GET_SESSION_TYPES = 'GET_SESSION_TYPES';
export const getSessionTypes = () => ({
  type: GET_SESSION_TYPES,
});
