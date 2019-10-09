import { fromJS } from 'immutable';
import { GET_JWT, VALIDATE_JWT, REFRESH_JWT, DESTROY_JWT } from './actions';
import { getActionName, getActionStatus, PENDING, SUCCESS, FAILED } from '../actionCreator'

export const defaultState = fromJS({
	accessToken: null,
	refreshToken: null,
	validUntil: null,
	expiresIn: null,
	requests: {
		[GET_JWT]: { pending: false, done: false, error: null, },
		[VALIDATE_JWT]: { pending: false, done: false, error: null, },
		[REFRESH_JWT]: { pending: false, done: false, error: null, },
		[DESTROY_JWT]: { pending: false, done: false, error: null, },
	}
});

export default (state = defaultState, action) => {
	const { type, payload } = action || {};
	const { error, ...rest } = payload || {};
	const actionName = getActionName(type);
	const actionStatus = getActionStatus(type);
	switch (actionName) {
		case GET_JWT:
		case VALIDATE_JWT:
		case REFRESH_JWT:
		case DESTROY_JWT:
			return fromJS({
				...state.toJS(),
				...rest,
				requests: {
					...state.toJS().requests,
					[actionName]: {
						pending: actionStatus === PENDING,
						done: actionStatus === SUCCESS || actionStatus == FAILED,
						error: error || null,
					},
				},
			});
		default:
			return state;
	}
};