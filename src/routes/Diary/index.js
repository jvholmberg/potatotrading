import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';
import BalanceChart from './components/BalanceChart';
import ComparisonChart from './components/ComparisonChart';
import GoalChart from './components/GoalChart';

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
  sessions,
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
            submitting: createSessionReq.pending,
            error: createSessionReq.error,
            onSubmit: createSession,
            sessionTypes,
          }} />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <BalanceChart {...{ sessions }} />
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
            loading: getSessionsReq.pending || getSessionTypesReq.pending,
            error: getSessionsReq.error || getSessionTypesReq.error,
            sessions,
          }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

Diary.propTypes = {
  getSessionsReq: PropTypes.object,
  getSessionTypesReq: PropTypes.object,
  createSession: PropTypes.func.isRequired,
  getSessions: PropTypes.func.isRequired,
  getSessionTypes: PropTypes.func.isRequired,
}

Diary.defaultProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
