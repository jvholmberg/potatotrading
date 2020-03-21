import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import UpdatePassword from './components/UpdatePassword';

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

const Settings = () => {
  const dispatch = useDispatch()


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
      <Grid item lg={4} md={4} sm={6} xs={12}>
        <UpdatePassword />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <Paper className={classes.paper}>
          sc
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Settings;
