import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { getJwt } from '../../sagas/auth/actions';
import { selectGetJwt } from '../../sagas/auth/selectors';

export const mapStateToProps = createSelector(
	[selectGetJwt],
	(request) => ({
		...request
	}));

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		getJwt,
	}, dispatch);