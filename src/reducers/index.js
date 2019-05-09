import { combineReducers } from 'redux';

import appReducer from './appReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  app: appReducer,
  requests: requestReducer,
});