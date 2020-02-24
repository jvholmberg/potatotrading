import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createSession, getSessionTypes, getSessions } from '../../sagas/sessions/actions';
import {
  selectCreateSessionReq,
  selectGetSessionTypesReq,
  selectGetSessionsReq,
  selectSessionTypes,
  selectSessionsWithType,
} from '../../sagas/sessions/selectors';

export const mapStateToProps = createSelector(
  [
    selectCreateSessionReq,
    selectGetSessionsReq,
    selectGetSessionTypesReq,
    selectSessionTypes,
    selectSessionsWithType,
  ],
  (
    createSessionReq,
    getSessionsReq,
    getSessionTypesReq,
    sessionTypes,
    sessions,
  ) => ({
    isSubmitting: createSessionReq.pending,
    isLoading: getSessionsReq.pending || getSessionTypesReq.pending,
    submitError: createSessionReq.error,
    loadError: getSessionsReq.error || getSessionTypesReq.error,
    sessionTypes,
    sessions,
  })
);

export const mapDispatchToProps = dispatch => bindActionCreators({
  doCreateSession: createSession,
  doGetSessions: getSessions,
  doGetSessionTypes: getSessionTypes,
}, dispatch);
