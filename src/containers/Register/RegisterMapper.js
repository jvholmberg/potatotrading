import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { register } from '../../actions';

export const mapStateToProps = (state, props) => {

  return {};
};

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    register,
  }, dispatch);