import { combineReducers } from 'redux';

import appReducer from './appReducer';
import { requestReducer } from '../middleware/Requests';

export default combineReducers({
  app: appReducer,
  requests: requestReducer,
});