import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { getJwt, validateJwt } from '../../actions';
import {
  reqGetJwt,
} from '../../selectors';

export const mapStateToProps = (state, props) => {
  const {
    pending: pendingGetJwt,
    response: responseGetJwt,
    error: errorGetJwt,
  } = reqGetJwt(state);
  return {
    pendingGetJwt,
    responseGetJwt,
    errorGetJwt,
  };
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getJwt,
    validateJwt,
  }, dispatch);