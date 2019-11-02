import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { selectAccessToken } from '../../../sagas/auth/selectors';
import { destroyJwt } from '../../../sagas/auth/actions';
import { selectSidebarOpen, selectIsDesktop } from '../../../sagas/ui/selectors';
import { setSidebarOpen } from '../../../sagas/ui/actions';

export const mapStateToProps = createSelector(
	[selectAccessToken, selectSidebarOpen, selectIsDesktop],
	(accessToken, sidebarOpen, isDesktop) => ({
		accessToken,
		sidebarOpen,
		isDesktop,
	}));

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
		destroyJwt,
		setSidebarOpen,
  }, dispatch);