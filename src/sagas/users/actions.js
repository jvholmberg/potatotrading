
export const CREATE_USER = 'CREATE_USER';
export const createUser = (values) => ({
	type: CREATE_USER,
	payload: values,
});