import { createSelector } from 'reselect';
import {
	resGetJwt,
	errGetJwt,
} from '../../selectors';

export default createSelector(
	[resGetJwt, errGetJwt],
	(resGetJwt, errGetJwt) => ({
		visible: errGetJwt,
		loading: !resGetJwt && !errGetJwt,
	}));