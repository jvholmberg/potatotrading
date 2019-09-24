import {
	makeRequest,
	forceRequest,
	removeRequest,
	REQUEST_METHOD,
	FORCE_REQUEST,
	REMOVE_REQUEST,
} from '../middleware/Requests';
import {
	getFromStorage,
	createObjectForStorageActions,
	LOCAL_STORAGE,
} from '../middleware/Storage';

/**
 * Get all users
 */
export const GET_USER = 'GET_USER';
export const fetchUsers = () => ({
	...makeRequest({
    type: GET_USER,
    url: `/api/users`,
		method: REQUEST_METHOD.GET,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}),
	...getFromStorage([
		createObjectForStorageActions(LOCAL_STORAGE, 'accessToken', null, (e) => ({
			key: `${FORCE_REQUEST}.headers.Authorization`,
			value: `Bearer ${e}`
		}))
	]),
});

/**
 * Create user
 */
export const CREATE_USER = 'CREATE_USER';
export const createUser = (values) => 
	forceRequest({
    type: CREATE_USER,
    url: `/api/users`,
		method: REQUEST_METHOD.POST,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
    body: values,
	});