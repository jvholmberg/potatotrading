import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import InputIcon from '@material-ui/icons/Input';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { destroyToken } from '../../sagas/auth/actions';
import NotificationsButton from '../../components/Buttons/Notifications';
import MenuButton from '../../components/Buttons/Menu';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
}));

const HeaderMain = () => {
  const dispatch = useDispatch()
  const doDestroyToken = useCallback(() => dispatch(destroyToken()), [dispatch]);
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" style={{ height: '35px' }} src="/logo_light.png" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden xsDown>
          <NotificationsButton length={1} />
          <IconButton color="inherit" className={classes.signOutButton} onClick={doDestroyToken}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <MenuButton />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMain;
