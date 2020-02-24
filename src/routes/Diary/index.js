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
    boxSizing: 'border-box',
    minHeight: '18rem'
  }
}));

const Diary = ({
  doCreateSession,
  doGetSessionTypes,
  doGetSessions,
  isSubmitting,
  isLoading,
  submitError,
  loadError,
  sessions,
  sessionTypes,
}) => {
  React.useEffect(() => {
    doGetSessionTypes();
    doGetSessions();
  }, [doGetSessionTypes, doGetSessions]);

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
            submitting: isSubmitting,
            error: submitError,
            onSubmit: doCreateSession,
            sessionTypes,
          }} />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <BalanceChart {...{
            loading: isLoading,
            error: loadError,
            sessions
          }} />
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
            loading: isLoading,
            error: loadError,
            sessions,
          }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

Diary.propTypes = {
  doCreateSession: PropTypes.func.isRequired,
  doGetSessions: PropTypes.func.isRequired,
  doGetSessionTypes: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  isLoading: PropTypes.bool,
  submitError: PropTypes.string,
  loadError: PropTypes.string,
  sessions: PropTypes.array,
  sessionTypes: PropTypes.array,
}

Diary.defaultProps = {
  isSubmitting: false,
  isLoading: true,
  submitError: null,
  loadError: null,
  sessions: [],
  sessionTypes: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
