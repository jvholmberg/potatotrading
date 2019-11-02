import { fromJS } from 'immutable';
import { SIDEBAR_OPEN } from './actions';
import { getActionType, getActionName, getActionStatus, UI } from '../actionCreator'

export const defaultState = fromJS({
	screen: { size: null },
	sidebar: { open: false },
});

export default (state = defaultState, action) => {
	const { type, payload } = action || {};
	const actionType = getActionType(type);
	// ignore non UI actions
	if (actionType !== UI) {
		return state;
	}
	const actionName = getActionName(type);
	switch (actionName) {
		case SIDEBAR_OPEN:
			return state.setIn(['sidebar', 'open'], payload);
		default:
			return state;
	}
};