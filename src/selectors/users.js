import _ from 'lodash';
import {
	GET_USER,
	CREATE_USER,
} from '../actions';

export const reqGetUser = (state) => _.get(state, `requests.${GET_USER}`, {});
export const resGetUser = (state) => _.get(state, `requests.${GET_USER}.response`);
export const errGetUser = (state) => _.get(state, `requests.${GET_USER}.error`);

export const reqCreateUser = (state) => _.get(state, `requests.${CREATE_USER}`, {});
export const resCreateUser = (state) => _.get(state, `requests.${CREATE_USER}.response`);
export const errCreateUser = (state) => _.get(state, `requests.${CREATE_USER}.error`);