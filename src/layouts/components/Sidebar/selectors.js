import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { selectIsLoggedIn } from '../../../sagas/auth/selectors';
import { destroyJwt } from '../../../sagas/auth/actions';
import { selectSidebarOpen, selectIsDesktop } from '../../../sagas/ui/selectors';
import { setSidebarOpen } from '../../../sagas/ui/actions';

export const mapStateToProps = createSelector(
  [selectIsLoggedIn, selectSidebarOpen, selectIsDesktop],
  (isLoggedIn, sidebarOpen, isDesktop) => ({
    isLoggedIn,
    sidebarOpen,
    isDesktop,
  })
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    destroyJwt,
    setSidebarOpen,
  }, dispatch);
