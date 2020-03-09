import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';
import BalanceChart from './components/BalanceChart';
import ComparisonChart from './components/ComparisonChart';
import GoalChart from './components/GoalChart';
import { getSessionTypes, getSessions } from '../../sagas/sessions/actions';

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

const Diary = () => {
  const dispatch = useDispatch()
  const doGetSessions = useCallback(() => dispatch(getSessions()), [dispatch]);
  const doGetSessionTypes = useCallback(() => dispatch(getSessionTypes()), [dispatch]);

  React.useEffect(() => {
    doGetSessions();
    doGetSessionTypes();
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
          <SessionForm />
        </Paper>
      </Grid>
      <Grid item lg={2} md={3} sm={6} xs={12}>
        <Paper className={classes.paper}>
          <BalanceChart />
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
          <SessionTable />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Diary;
