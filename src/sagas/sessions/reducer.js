import { fromJS } from 'immutable';
import { CREATE_SESSION, GET_SESSIONS } from './actions';

export const defaultState = fromJS({
	sessions: [],
	requests: {
		[CREATE_SESSION]: { pending: false, done: false, error: null, },
		[GET_SESSIONS]: { pending: false, done: false, error: null, },
	},
});

export default (state = defaultState, { type, payload }) => {

	switch (type) {
		default:
			return state;
	}
};