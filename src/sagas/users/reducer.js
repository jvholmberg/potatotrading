import { fromJS } from 'immutable';
import { CREATE_USER } from './actions';

export const defaultState = fromJS({
	
});

export default (state = defaultState, { type, payload }) => {

	switch (type) {
		case CREATE_USER:
			return fromJS({
				...state,
				auth: {
					...state.auth,
					...payload,
				},
			});
		default:
			return state;
	}
};