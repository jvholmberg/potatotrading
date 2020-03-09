import { createSelector } from 'reselect';
import _ from 'lodash';
import {
  selectGetSessionsReq,
  selectGetSessionTypesReq,
  selectSessionIds,
  selectSessions,
  selectSessionTypes,
} from '../../../../sagas/sessions/selectors';

export const selectFetching = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.pending || getSessionTypesReq.pending,
);

export const selectError = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.error || getSessionTypesReq.error,
);

export const selectData = createSelector(
  selectFetching, selectError, selectSessionIds, selectSessions, selectSessionTypes,
  (fetching, error, sessionIds, sessions, sessionTypes) => {
    if (fetching || error) return [];
    return _.reduce(sessionIds, (previous, current) => {
      const index = _.findIndex(previous, e => e.id === sessions[current].typeId);
      const currentSession = sessions[current];
      const currentSessionType = sessionTypes[currentSession.typeId];
      if (index === -1) {
        previous.push({
          id: currentSessionType.id,
          name: currentSessionType.name,
          color: currentSessionType.color,
          value: 1,
        });
      } else {
        previous.splice(index, 1, {
          id: currentSessionType.id,
          name: currentSessionType.name,
          color: currentSessionType.color,
          value: previous[index].value + 1
        });
      }
      return previous;
    }, []);
  },
);
