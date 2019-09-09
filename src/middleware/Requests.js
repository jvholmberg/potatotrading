import _ from 'lodash';

/**
 * Constants
 */
export const REDUCER_NAME = 'requests';

export const MAKE_REQUEST = `API_MIDDLWARE:MAKE_REQUEST`;
export const FORCE_REQUEST = `API_MIDDLWARE:FORCE_REQUEST`;
export const REMOVE_REQUEST = `API_MIDDLWARE:REMOVE_REQUEST`;

export const REQUEST_METHOD = {
	GET: 'GET',
	POST: 'POST',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
};

/**
 * Utils
 */
const isRequestAction = (type) => _.startsWith(type, 'REQ:');

const getRequestStatus = (type) => _.split(type, '/')[1];

const getActionType = (type) => {
  const stageOne = _.split(type, ':')[1];
  const stageTwo = _.split(stageOne, '/')[0];
  return stageTwo;
};

/**
 * Actions
 */
export const makeRequest = (data) => ({ [MAKE_REQUEST]: data });
export const forceRequest = (data) => ({ [FORCE_REQUEST]: data });
export const removeRequest = (type) => ({ [REMOVE_REQUEST]: { type } });


/**
 * Reducer
 */
export const defaultState = {};
export const requestReducer = (state = defaultState, action) => {

  // Not a request action
  if (!isRequestAction(action.type)) {
    return state;
  }

  const requestStatus = getRequestStatus(action.type);
  const actionType = getActionType(action.type);
  switch (requestStatus) {
    case 'PENDING':
      return Object.assign({}, state, {
        [actionType]: {
          valid: false,
          pending: true,
          failed: false,
					queued: false,
        },
      });
    case 'SUCCESS':
      return Object.assign({}, state, {
        [actionType]: {
          valid: true,
          pending: false,
          failed: false,
          queued: false,
          response: action.response,
        },
      });
    case 'FAILURE':
      return Object.assign({}, state, {
        [actionType]: {
          valid: false,
          pending: false,
          failed: true,
          queued: false,
          error: action.error,
        },
      });
    case 'REMOVE':
      const newState = Object.assign({}, state);
      delete newState[actionType];
      return newState;
    default:
      return state;
  }
};

/**
 * Middleware
 */
export default (store) => (next) => (action) => {

	// Check if input exist for this middleware
	const input = action[MAKE_REQUEST]
		|| action[FORCE_REQUEST]
		|| action[REMOVE_REQUEST];

  // If no input for this middleware exist; skip
	if (typeof input === 'undefined') {
		next(action);
		return;
	}

	// Check if request shold be forced or deleted
	const shouldForceReq = !!action[FORCE_REQUEST];
	const shouldRemoveReq = !!action[REMOVE_REQUEST];

	const {
		type,
		url,
		method,
		headers,
		query,
		body,
	} = input;

	// Validate params when not production
	if (process.env.NODE_ENV !== 'production') {
		// Validate provided data
		// 1. type must be provided
		// 2. url must be provided
		//		; unless shouldRemoveReq equals true
		// 3. method must be one of 'GET', 'POST', 'UPDATE', 'DELETE'
		//		; unless shouldRemoveReq equals true
		// 4. headers must be provided
		//		; unless shouldRemoveReq equals true
		if (!_.isString(type)) {
			throw new Error('Must provide a type.');
		}
		if (!shouldRemoveReq
			&& !_.isString(url)) {
				throw new Error('Must provide a url.');
			}
		if (!shouldRemoveReq
			&& !_.includes([
				REQUEST_METHOD.GET,
				REQUEST_METHOD.POST,
				REQUEST_METHOD.PUT,
				REQUEST_METHOD.PATCH,
				REQUEST_METHOD.DELETE
			], method)) {
				throw new Error('Expected method to be one of GET, POST, PUT, DELETE or PATCH.');
			}
		if (!shouldRemoveReq
			&& !_.isObject(headers)) {
				throw new Error('Must provide headers');
			}
	}

	// Remove request in store
  if (shouldRemoveReq) {
    next({ type: `REQ:${type}/REMOVE` });
    return;
  }

  // Get existing request of type
	const {
		valid: validExistingReq,
		pending: pendingExistingReq,
	} = _.get(store.getState(), `${REDUCER_NAME}.${type}`, {});
	
	// If valid or pending exist skip unless using force
	if (!shouldForceReq &&
		(validExistingReq || pendingExistingReq)) {
    return;
	}
	
	// Transform action for reducer
  const actionCreator = (data) => {
    const createdAction = Object.assign({}, action, data);
    delete createdAction[MAKE_REQUEST];
    delete createdAction[FORCE_REQUEST];
    return createdAction;
  }

	// Mark request as pending and make call
	next(actionCreator({ type: `REQ:${type}/PENDING` }));
	fetch(url, {
    method,
    headers,
    query,
    body: JSON.stringify(body),
    mode: 'cors',
  }).then((res) =>
    res.json()
      .then((json) => {
        if (!res.ok) {
          next(actionCreator({
						type: `REQ:${type}/FAILURE`,
						error: json,
					}));
					return;
				}
				next(actionCreator({
					type: `REQ:${type}/SUCCESS`,
					response: json,
				}))
				return;
			}));
	return;
};