import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectIsLoggedIn } from '../../../sagas/auth/selectors';
import { destroyJwt } from '../../../sagas/auth/actions';

export const mapStateToProps = createSelector(
  [selectIsLoggedIn],
  isLoggedIn => ({ isLoggedIn }),
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    destroyJwt,
  }, dispatch);
