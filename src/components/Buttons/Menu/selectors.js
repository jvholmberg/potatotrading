import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectSidebarOpen } from '../../../sagas/ui/selectors';
import { setSidebarOpen } from '../../../sagas/ui/actions';

export const mapStateToProps = createSelector(
  [selectSidebarOpen],
  sidebarOpen => ({
    sidebarOpen,
  }),
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setSidebarOpen,
  }, dispatch);
