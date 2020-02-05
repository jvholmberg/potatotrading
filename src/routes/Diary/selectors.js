import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { createSession, getSessionTypes, getSessions } from '../../sagas/sessions/actions';
import {
  selectCreateSessionReq,
  selectGetSessionTypesReq,
  selectGetSessionsReq,
  selectSessionTypes,
  selectSessionsWithType,
  selectSessionsWithTypeForThisMonth,
  selectSessionsWithTypeForThisWeek,
  selectSessionsWithTypeForLastMonth,
  selectSessionsWithTypeForLastWeek
} from '../../sagas/sessions/selectors';

export const mapStateToProps = createSelector(
  [
    selectCreateSessionReq,
    selectGetSessionsReq,
    selectGetSessionTypesReq,
    selectSessionTypes,
    selectSessionsWithType,
    selectSessionsWithTypeForThisMonth,
    selectSessionsWithTypeForThisWeek,
    selectSessionsWithTypeForLastMonth,
    selectSessionsWithTypeForLastWeek,
  ],
  (
    createSessionReq,
    getSessionsReq,
    getSessionTypesReq,
    sessionTypes,
    allSessions,
    thisMonthsSessions,
    thisWeeksSessions,
    lastMonthSessions,
    lastWeeksSessions,
  ) => ({
    createSessionReq,
    getSessionsReq,
    getSessionTypesReq,
    sessionTypes,
    allSessions,
    thisMonthsSessions,
    thisWeeksSessions,
    lastMonthSessions,
    lastWeeksSessions,
  })
);

export const mapDispatchToProps = dispatch => bindActionCreators({
  createSession,
  getSessions,
  getSessionTypes,
}, dispatch);
