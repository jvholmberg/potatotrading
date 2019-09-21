import { createSelector } from 'reselect';
import {
	resGetJwt,
	errGetJwt,
	resGetUser,
	errGetUser,
} from '../../selectors';

export default createSelector(
	[resGetJwt, errGetJwt, resGetUser, errGetUser],
	(resGetJwt, errGetJwt, resGetUser, errGetUser) => ({
		visible: !errGetJwt || !errGetUser,
		loading: resGetJwt && resGetUser,
		user: resGetUser,
	}));