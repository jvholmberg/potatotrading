import {
  CREATE_USER, GET_MY_USER, GET_USERS, UPDATE_USER, DELETE_USER,
} from './actions';

// Data
const selectReducer = state => state.get('users');
export const selectMyUser = state => selectReducer(state).get('my');
export const selectOtherUsers = state => selectReducer(state).get('others');

// Requests
export const selectCreateUserReq = state => selectReducer(state).getIn(['requests', CREATE_USER]);
export const selectGetMyUserReq = state => selectReducer(state).getIn(['requests', GET_MY_USER]);
export const selectGetUsersReq = state => selectReducer(state).getIn(['requests', GET_USERS]);
export const selectUpdateUserReq = state => selectReducer(state).getIn(['requests', UPDATE_USER]);
export const selectDeleteUserReq = state => selectReducer(state).getIn(['requests', DELETE_USER]);
