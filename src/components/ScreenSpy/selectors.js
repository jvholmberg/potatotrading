import { bindActionCreators } from 'redux';
import { setScreenSize } from '../../sagas/ui/actions';

export default dispatch => bindActionCreators({
  setScreenSize,
}, dispatch);
