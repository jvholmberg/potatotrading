import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { selectAccessToken } from '../../sagas/auth/selectors';

export const mapStateToProps = createSelector(
	[selectAccessToken],
	(accessToken) => ({
		accessToken
	}));

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({

  }, dispatch);