import { createSelector } from 'reselect';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';

// Data
const selectReducer = state => state.sessions;
export const selectSessions = createSelector(selectReducer, s => s.get('data'));
export const selectSessionTypes = createSelector(selectReducer, s => s.get('types'));

export const selectSessionsWithType = createSelector(
  selectSessions, selectSessionTypes,
  (sessions, sessionTypes) => sessions.map(session => {
    const sessionType = sessionTypes.find(type => type.get('id') === session.get('typeId'));
    const sessionWithType = sessionType && session
      .set('type', sessionType)
      .delete('typeId');
    return sessionType ? sessionWithType : session;
  })
);

// Requests
export const selectCreateSessionReq = createSelector(
  selectReducer,
  s => s.getIn(['requests', CREATE_SESSION])
);
export const selectGetSessionsReq = createSelector(
  selectReducer,
  s => s.getIn(['requests', GET_SESSIONS])
);
export const selectGetSessionTypesReq = createSelector(
  selectReducer,
  s => s.getIn(['requests', GET_SESSION_TYPES])
);
