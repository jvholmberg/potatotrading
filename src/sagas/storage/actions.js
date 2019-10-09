export const SET_SESSION_STORAGE = 'SET_SESSION_STORAGE';
export const setSessionStorage = (key, value) => ({
	type: SET_SESSION_STORAGE,
	payload: {
		key,
		value,
	},
});

export const GET_SESSION_STORAGE = 'GET_SESSION_STORAGE';
export const getSessionStorage = (key) => ({
	type: GET_SESSION_STORAGE,
	payload: {
		key,
	},
});

export const DELETE_SESSION_STORAGE = 'DELETE_SESSION_STORAGE';
export const deleteSessionStorage = (key) => ({
	type: DELETE_SESSION_STORAGE,
	payload: {
		key,
	},
});

export const SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE';
export const setLocalStorage = (key, value) => ({
	type: SET_LOCAL_STORAGE,
	payload: {
		key,
		value,
	},
});

export const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
export const getLocalStorage = (key) => ({
	type: GET_LOCAL_STORAGE,
	payload: {
		key,
	},
});

export const DELETE_LOCAL_STORAGE = 'DELETE_LOCAL_STORAGE';
export const deleteLocalStorage = (key) => ({
	type: DELETE_LOCAL_STORAGE,
	payload: {
		key,
	},
});
