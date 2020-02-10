import { GET_PROFILE, UPDATE_PROFILE } from './actions';

// Data
const selectReducer = state => state.get('profile');
export const selectProfile = state => selectReducer(state).get('profile');

// Requests
export const selectGetProfileReq = state => selectReducer(state).getIn(['requests', GET_PROFILE]);
export const selectUpdateProfileReq = state => selectReducer(state).getIn(['requests', UPDATE_PROFILE]);
