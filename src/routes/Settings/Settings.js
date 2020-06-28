import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import EditGraphs from './EditGraphs';
import EditNotifications from './EditNotifications';
import ChangePassword from './ChangePassword';
import { getUserSettings } from '../../sagas/settings/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '1000px',
    margin: 0,
    padding: theme.spacing(2),
  },
}));

const Settings = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getUserSettings());
  }, [dispatch]);

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
      <Grid item xs={12}>
        <EditGraphs />
      </Grid>
      <Grid item xs={12}>
        <ChangePassword />
      </Grid>
      <Grid item xs={12}>
        <EditNotifications />
      </Grid>
    </Grid>
  );
};
export default Settings;
