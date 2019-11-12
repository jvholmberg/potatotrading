import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectIsDesktop } from '../../../sagas/ui/selectors';

export const mapStateToProps = createSelector(
  [selectIsDesktop],
  isDesktop => ({ isDesktop })
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch);
