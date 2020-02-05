import { createSelector } from 'reselect';
import Immutable, { fromJS } from 'immutable';
import {
  isWithinInterval, lastDayOfMonth, lastDayOfWeek, startOfMonth, startOfWeek, addMonths, addWeeks,
} from 'date-fns';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';

const mergeSessionWithSessionType = (session, sessionTypes) => {
  const sessionType = sessionTypes.find(type => type.get('id') === session.get('typeId'));
  const sessionWithType = sessionType && session
    .set('type', sessionType)
    .delete('typeId');
  return sessionType ? sessionWithType : session;
}

// Data
const selectReducer = state => state.sessions;
export const selectSessions = createSelector(selectReducer, s => s.get('data'));
export const selectSessionTypes = createSelector(selectReducer, s => s.get('types'));

export const selectSessionsForPeriod = (start, end) => createSelector(
  selectSessions,
  sessions => fromJS(sessions.reduce((ret, val) => {
    if (isWithinInterval(new Date(val.get('timestamp')), { start, end })) {
      ret.push(val);
    }
    return ret;
  }, [])),
);

export const selectSessionsWithType = createSelector(
  selectSessions, selectSessionTypes,
  (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
);

export const selectSessionsWithTypeForPeriod = (start, end) => createSelector(
  selectSessionsForPeriod(start, end), selectSessionTypes,
  (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
);

export const selectSessionsWithTypeForThisMonth = (() => {
  const now = new Date();
  return createSelector(
    selectSessionsForPeriod(startOfMonth(now), lastDayOfMonth(now)), selectSessionTypes,
    (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
  );
})();

export const selectSessionsWithTypeForThisWeek = (() => {
  const now = new Date();
  return createSelector(
    selectSessionsForPeriod(
      startOfWeek(now, { weekStartsOn: 1 }),
      lastDayOfWeek(now, { weekStartsOn: 1 })
    ), selectSessionTypes,
    (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
  );
})();

export const selectSessionsWithTypeForLastMonth = (() => {
  const previousMonth = addMonths(new Date(), -1);
  return createSelector(
    selectSessionsForPeriod(startOfMonth(previousMonth), lastDayOfMonth(previousMonth)), selectSessionTypes,
    (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
  );
})();

export const selectSessionsWithTypeForLastWeek = (() => {
  const previousWeek = addWeeks(new Date(), -1);
  return createSelector(
    selectSessionsForPeriod(
      startOfWeek(previousWeek, { weekStartsOn: 1 }),
      lastDayOfWeek(previousWeek, { weekStartsOn: 1 })
    ), selectSessionTypes,
    (sessions, sessionTypes) => sessions.map(session => mergeSessionWithSessionType(session, sessionTypes))
  );
})();

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
