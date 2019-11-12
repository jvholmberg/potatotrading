
export const CREATE_SESSION = 'CREATE_SESSION';
export const createSession = session => ({
  type: CREATE_SESSION,
  payload: session,
});

export const GET_SESSIONS = 'GET_SESSIONS';
export const getSessions = () => ({
  type: GET_SESSIONS,
  payload: null,
});
