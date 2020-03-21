import {
  CREATE_SESSION,
  GET_SESSIONS,
  GET_SESSION_TYPES,
} from './constants';

export const createSession = session => ({
  type: CREATE_SESSION,
  payload: session,
});

export const getSessions = () => ({
  type: GET_SESSIONS,
});

export const getSessionTypes = () => ({
  type: GET_SESSION_TYPES,
});
