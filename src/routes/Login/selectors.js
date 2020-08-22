import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { getToken } from '../../sagas/auth/actions';
import { selectGetTokenReq } from '../../sagas/auth/selectors';

export const mapStateToProps = createSelector(
  [selectGetTokenReq],
  request => ({
    ...request
  })
);

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getToken,
  }, dispatch);
