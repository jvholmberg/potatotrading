import _ from 'lodash';
import { CREATE_USER } from './actions';

export const reqCreateUser = (state) => _.get(state, `requests.${CREATE_USER}`, {});
export const resCreateUser = (state) => _.get(state, `requests.${CREATE_USER}.response`);
export const errCreateUser = (state) => _.get(state, `requests.${CREATE_USER}.error`);