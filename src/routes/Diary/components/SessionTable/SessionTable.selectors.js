import { createSelector } from 'reselect';
import { selectGetSessionsReq, selectGetSessionTypesReq } from '../../../../sagas/sessions/selectors';

export const selectIsFetching = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.pending || getSessionTypesReq.pending,
);

export const selectFetchError = createSelector(
  selectGetSessionsReq, selectGetSessionTypesReq,
  (getSessionsReq, getSessionTypesReq) => getSessionsReq.error || getSessionTypesReq.error,
);
