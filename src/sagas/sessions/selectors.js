import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { isWithinInterval } from 'date-fns';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';

const mergeSessionWithSessionType = (session, sessionTypes) => {
  const sessionType = sessionTypes.find(type => type.get('id') === session.get('typeId'));
  const sessionWithType = sessionType && session
    .set('type', sessionType)
    .delete('typeId');
  return sessionType ? sessionWithType : session;
}

// Data
const selectReducer = state => state.get('sessions');
export const selectSessions = createSelector(selectReducer, s => s.get('data'));
export const selectSessionTypes = createSelector(selectReducer, s => s.get('types'));

export const selectSessionsForPeriod = (start, end) => createSelector(
  selectSessions,
  sessions => fromJS(sessions.filter(val => isWithinInterval(new Date(val.get('timestamp')), { start, end }))),
);

export const selectSessionsWithType = createSelector(
  selectSessions, selectSessionTypes,
  (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
);

export const selectSessionsWithTypeForPeriod = (start, end) => createSelector(
  selectSessionsForPeriod(start, end), selectSessionTypes,
  (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
);

// Requests
export const selectCreateSessionReq = createSelector(
  selectReducer,
  state => state.getIn(['requests', CREATE_SESSION])
);
export const selectGetSessionsReq = createSelector(
  selectReducer,
  state => state.getIn(['requests', GET_SESSIONS])
);
export const selectGetSessionTypesReq = createSelector(
  selectReducer,
  state => state.getIn(['requests', GET_SESSION_TYPES])
);
