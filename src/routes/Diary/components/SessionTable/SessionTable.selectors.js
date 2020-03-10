import { createSelector } from 'reselect';
import _ from 'lodash';
import { DESC } from '../../../../sagas/constants';
import {
  selectGetSessionsReq,
  selectGetSessionTypesReq,
  selectSessionIds,
  selectSessions,
  selectSessionTypes,
} from '../../../../sagas/sessions/selectors';
import { selectSortingDiary } from '../../../../sagas/ui/selectors';

export const selectIsFetching = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.pending || getSessionTypesReq.pending,
);

export const selectFetchError = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.error || getSessionTypesReq.error,
);

export const selectSessionsIdsSorted = createSelector(
  selectSessionIds, selectSessions, selectSessionTypes, selectSortingDiary,
  (sessionIds, sessions, sessionTypes, sorting) => {
    const sorted = _.sortBy(sessionIds, id => {
      const session = sessions[id];
      const type = sessionTypes[session.typeId];
      return { ...sessions[id], type }[sorting.key];
    });
    if (sorting.direction === DESC) return _.reverse(sorted);
    return sorted;
  },
);
