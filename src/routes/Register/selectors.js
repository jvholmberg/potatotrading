import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createUser } from '../../sagas/users/actions';
import { selectCreateUserReq } from '../../sagas/users/selectors';

export const mapStateToProps = createSelector(
  [selectCreateUserReq], user => user
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createUser,
  }, dispatch);
