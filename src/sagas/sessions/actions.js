
export const CREATE_SESSION = 'CREATE_SESSION';
export const createSession = (values) => ({
	type: CREATE_SESSION,
	payload: values,
});