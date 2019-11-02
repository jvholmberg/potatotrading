import { bindActionCreators } from 'redux';
import { setScreenSize } from '../../sagas/ui/actions';

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
		setScreenSize,
  }, dispatch);