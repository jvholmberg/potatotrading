import {
  CREATE_USER,
  GET_MY_USER,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './constants';

const selectReducer = state => state.users;

export const selectMyUser = state => selectReducer(state).my;
export const selectOtherUsers = state => selectReducer(state).others;

const selectRequests = state => selectReducer(state).requests;
const selectRequestsFor = (state, req) => selectRequests(state)[req];
export const selectCreateUserReq = state => selectRequestsFor(state, CREATE_USER);
export const selectGetMyUserReq = state => selectRequestsFor(state, GET_MY_USER);
export const selectGetUsersReq = state => selectRequestsFor(state, GET_USERS);
export const selectUpdateUserReq = state => selectRequestsFor(state, UPDATE_USER);
export const selectDeleteUserReq = state => selectRequestsFor(state, DELETE_USER);
