import { bindActionCreators } from 'redux';

import { validateJwt, refreshJwt, destroyJwt } from '../../actions'
import { reqGetJwt, reqValidateJwt, reqRefreshJwt, reqDestroyJwt } from '../../selectors';

export const mapStateToProps = (state, props) => {
  const {
    pending: pendingGetJwt,
    valid: validGetJwt,
  } = reqGetJwt(state);
  const {
    pending: pendingValidateJwt,
    valid: validValidateJwt,
  } = reqValidateJwt(state);
  const {
    queued: queuedRefreshJwt,
    pending: pendingRefreshJwt,
  } = reqRefreshJwt(state);
  const {
    pending: pendingDestroyJwt,
    valid: validDestroyJwt,
  } = reqDestroyJwt(state);
  return {
    pendingGetJwt,
    validGetJwt,
    pendingValidateJwt,
    validValidateJwt,
    queuedRefreshJwt,
    pendingRefreshJwt,
    pendingDestroyJwt,
    validDestroyJwt,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    validateJwt,
    refreshJwt,
    destroyJwt,
  }, dispatch);