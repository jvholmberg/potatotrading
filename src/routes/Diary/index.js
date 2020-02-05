import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import SessionForm from './SessionForm';
import SessionTable from './SessionTable';
import BalanceChart from './BalanceChart';
import ComparisonChart from './ComparisonChart';
import GoalChart from './GoalChart';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 0,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

const Diary = ({
  createSessionReq,
  getSessionsReq,
  getSessionTypesReq,
  createSession,
  getSessionTypes,
  getSessions,
  allSessions,
  thisMonthsSessions,
  thisWeeksSessions,
  lastMonthSessions,
  lastWeeksSessions,
  sessionTypes,
}) => {
  React.useEffect(() => {
    getSessionTypes();
    getSessions();
  }, [getSessionTypes, getSessions]);

  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      alignContent="stretch">
      <Grid item lg={4} md={6} xs={12}>
        <Paper className={classes.paper}>
          <SessionForm {...{
            submitting: createSessionReq.get('pending'),
            error: createSessionReq.get('error'),
            onSubmit: createSession,
            sessionTypes,
          }} />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <BalanceChart {...{ sessions: thisMonthsSessions }} />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <ComparisonChart />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <GoalChart />
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <Paper className={classes.paper}>
          <SessionTable {...{
            loading: getSessionsReq.get('pending') || getSessionTypesReq.get('pending'),
            error: getSessionsReq.get('error') || getSessionTypesReq.get('error'),
            sessions: allSessions,
          }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

Diary.propTypes = {
  createSessionReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionsReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  getSessionTypesReq: PropTypes.instanceOf(Immutable.Map).isRequired,
  sessionTypes: PropTypes.instanceOf(Immutable.List),
  allSessions: PropTypes.instanceOf(Immutable.List),
  thisMonthsSessions: PropTypes.instanceOf(Immutable.List),
  thisWeeksSessions: PropTypes.instanceOf(Immutable.List),
  lastMonthSessions: PropTypes.instanceOf(Immutable.List),
  lastWeeksSessions: PropTypes.instanceOf(Immutable.List),
  createSession: PropTypes.func.isRequired,
  getSessions: PropTypes.func.isRequired,
  getSessionTypes: PropTypes.func.isRequired,
}

Diary.defaultProps = {
  sessionTypes: new Immutable.List(),
  allSessions: new Immutable.List(),
  thisMonthsSessions: new Immutable.List(),
  thisWeeksSessions: new Immutable.List(),
  lastMonthSessions: new Immutable.List(),
  lastWeeksSessions: new Immutable.List(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
