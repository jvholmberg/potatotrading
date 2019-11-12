import _ from 'lodash';
import { CREATE_USER, DELETE_USER } from './actions';

export const reqCreateUser = state => _.get(state, `requests.${CREATE_USER}`, {});
export const resCreateUser = state => _.get(state, `requests.${CREATE_USER}.response`);
export const errCreateUser = state => _.get(state, `requests.${CREATE_USER}.error`);

export const reqDeleteUser = state => _.get(state, `requests.${DELETE_USER}`, {});
export const resDeleteUser = state => _.get(state, `requests.${DELETE_USER}.response`);
export const errDeleteUser = state => _.get(state, `requests.${DELETE_USER}.error`);

// TODO: Remove lodash. It should not be used and we should add imutable here
