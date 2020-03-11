import _ from 'lodash';
import { createSelector } from 'reselect';
import { isWithinInterval } from 'date-fns';
import { reducerName } from './reducer';
import { CREATE_SESSION, GET_SESSIONS, GET_SESSION_TYPES } from './actions';

// Requests
export const selectCreateSessionReq = state => _.get(state, `${reducerName}.requests.${CREATE_SESSION}`);
export const selectGetSessionsReq = state => _.get(state, `${reducerName}.requests.${GET_SESSIONS}`);
export const selectGetSessionTypesReq = state => _.get(state, `${reducerName}.requests.${GET_SESSION_TYPES}`);

// Sessions
export const selectSessions = state => _.get(state, `${reducerName}.sessions.byId`);
export const selectSessionIds = state => _.get(state, `${reducerName}.sessions.allIds`);
export const selectSessionById = (state, id) => _.get(state, `${reducerName}.sessions.byId.${id}`);

// Session-types
export const selectSessionTypes = state => _.get(state, `${reducerName}.sessionTypes.byId`);
export const selectSessionTypeIds = state => _.get(state, `${reducerName}.sessionTypes.allIds`);
export const selectSessionTypeById = (state, id) =>
  _.get(state, `${reducerName}.sessionTypes.byId.${id}`);

// Custom
export const selectSessionIdsForPeriod = (start, end) => createSelector(
  selectSessionIds, selectSessions,
  (sessionIds, sessions) => _.filter(sessionIds, id => {
    const timestamp = _.get(sessions, `${id}.timestamp`);
    const shouldInclude = timestamp
      ? isWithinInterval(new Date(timestamp), { start, end })
      : false;
    return shouldInclude;
  }),
);
export const selectSessionIdsGroupedByType = createSelector(
  selectSessionIds, selectSessions,
  (sessionIds, sessions) => _.reduce(sessionIds, (result, id) => {
    const typeId = _.get(sessions, `${id}.typeId`);
    if (_.has(result, typeId)) _.get(result, typeId).push(id);
    else _.set(result, typeId, [id]);
    return result;
  }, {}),
);
export const selectSessionIdsOfType = (state, typeId) => createSelector(
  selectSessionIds, selectSessions,
  (sessionIds, sessions) => _.filter(sessionIds, id => {
    const isMatch = _.get(sessions, `${id}.typeId`) === typeId;
    return isMatch;
  }),
)(state);
