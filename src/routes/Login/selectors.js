import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { getJwt } from '../../sagas/auth/actions';
import { selectGetJwtReq } from '../../sagas/auth/selectors';

export const mapStateToProps = createSelector(
  [selectGetJwtReq],
  request => ({
    ...request
  })
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getJwt,
  }, dispatch);
