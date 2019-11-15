import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectIsLoggedIn } from '../sagas/auth/selectors';

export const mapStateToProps = createSelector(
  [selectIsLoggedIn],
  isLoggedIn => ({ isLoggedIn }),
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch);
