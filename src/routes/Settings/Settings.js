import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import UpdatePassword from './components/UpdatePassword';
import EditNotifications from './components/EditNotifications';
import EditSubscription from './components/EditSubscription';
import { getUserSettings } from '../../sagas/settings/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <UpdatePassword />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <EditNotifications />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <EditSubscription />
      </Grid>
    </Grid>
  );
};
export default Settings;
