import produce from 'immer';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { isWithinInterval } from 'date-fns';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';

const mergeSessionWithSessionType = (session, sessionTypes) => {
  const sessionType = _.find(sessionTypes, type => type.id === session.typeId);
  return produce(session, draft => {
    if (!sessionType) _.set(draft, 'type', { id: null, name: null });
    else _.set(draft, 'type', sessionType);
    _.unset(draft, 'typeId');
  });
}

const selectReducer = state => state.sessions;

// Data
export const selectSessions = state => selectReducer(state).data;
export const selectSessionTypes = state => selectReducer(state).types;

export const selectSessionsForPeriod = (start, end) => createSelector(
  selectSessions,
  sessions => _.filter(sessions, e => isWithinInterval(new Date(e.timestamp), { start, end })),
);

export const selectSessionsWithType = createSelector(
  selectSessions, selectSessionTypes,
  (sessions, sessionTypes) => _.map(sessions, e => mergeSessionWithSessionType(e, sessionTypes))
);

export const selectSessionsWithTypeForPeriod = (start, end) => createSelector(
  selectSessionsForPeriod(start, end), selectSessionTypes,
  (sessions, sessionTypes) => _.map(sessions, e => mergeSessionWithSessionType(e, sessionTypes))
);

// Requests
export const selectCreateSessionReq = createSelector(
  selectReducer,
  state => _.get(state, `requests.${CREATE_SESSION}`),
);
export const selectGetSessionsReq = createSelector(
  selectReducer,
  state => _.get(state, `requests.${GET_SESSIONS}`),
);
export const selectGetSessionTypesReq = createSelector(
  selectReducer,
  state => _.get(state, `requests.${GET_SESSION_TYPES}`),
);
