import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { selectIsLoggedIn } from '../sagas/auth/selectors';
import { loadToken } from '../sagas/auth/actions';
import { getMyUser } from '../sagas/users/actions';

export const mapStateToProps = createSelector(
  [selectIsLoggedIn],
  isLoggedIn => ({ isLoggedIn }),
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadToken,
    getMyUser,
  }, dispatch);
