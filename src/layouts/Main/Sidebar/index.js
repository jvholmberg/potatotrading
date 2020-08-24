import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, List } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import InputIcon from '@material-ui/icons/Input';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SettingsIcon from '@material-ui/icons/Settings';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { destroyToken } from '../../../sagas/auth/actions';
import { selectSidebarOpen, selectIsDesktop } from '../../../sagas/ui/selectors';
import { setSidebarOpen } from '../../../sagas/ui/actions';

import SidebarLink from './Sidebar.link';
import SidebarItem from './Sidebar.item';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = () => {
  const dispatch = useDispatch();
  const doDestroyToken = useCallback(() => dispatch(destroyToken()), [dispatch]);
  const doSetSidebarClosed = useCallback(() => dispatch(setSidebarOpen(false)), [dispatch]);

  const isDesktop = useSelector(selectIsDesktop);
  const sidebarOpen = useSelector(selectSidebarOpen);

  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      variant={isDesktop ? 'persistent' : 'temporary'}
      classes={{ paper: classes.drawer }}
      onClose={doSetSidebarClosed}
      open={isDesktop || sidebarOpen}>
      <List>
        <SidebarLink icon={AppsIcon} to="/overview">Overview</SidebarLink>
        <SidebarLink icon={SettingsIcon} to="/settings">Settings</SidebarLink>
        <SidebarLink icon={FitnessCenterIcon} to="/diary">Diary</SidebarLink>
        <SidebarItem icon={InputIcon} onClick={doDestroyToken}>Logout</SidebarItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
