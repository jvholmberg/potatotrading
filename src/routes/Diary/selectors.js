import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createSession, getSessionTypes, getSessions } from '../../sagas/sessions/actions';
import {
  selectCreateSessionReq, selectGetSessionTypesReq, selectGetSessionsReq, selectSessionTypes, selectSessions,
} from '../../sagas/sessions/selectors';

export const mapStateToProps = createSelector(
  [selectCreateSessionReq, selectGetSessionsReq, selectGetSessionTypesReq, selectSessionTypes, selectSessions],
  (createSessionReq, getSessionsReq, getSessionTypesReq, sessionTypes, sessions) => ({
    createSessionReq,
    getSessionsReq,
    getSessionTypesReq,
    sessionTypes,
    sessions,
  })
);

export const mapDispatchToProps = dispatch => bindActionCreators({
  createSession,
  getSessions,
  getSessionTypes,
}, dispatch);