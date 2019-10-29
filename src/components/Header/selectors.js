import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { selectAccessToken } from '../../sagas/auth/selectors';
import { destroyJwt } from '../../sagas/auth/actions';

export const mapStateToProps = createSelector(
	[selectAccessToken],
	(accessToken) => ({
		accessToken
	}));

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
		destroyJwt,
  }, dispatch);