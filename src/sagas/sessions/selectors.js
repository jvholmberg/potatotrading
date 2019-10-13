import { CREATE_SESSION, GET_SESSIONS} from './actions';

const selectReducer = (state) => state.sessions;
export const selectSessions = (state) => selectReducer(state).get('sessions');

export const selectCreateSessionReq = (state) => selectReducer(state).getIn(['requests', CREATE_SESSION]);
export const selectGetSessionsReq = (state) => selectReducer(state).getIn(['requests', GET_SESSIONS]);
