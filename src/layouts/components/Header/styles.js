/* eslint-disable */

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Logo = props => (
  <RouterLink to="/" {...props}>
    <img alt="Logo" src="/logo.svg" />
  </RouterLink>
);

export const Root = ({ children, ...rest }) => (
  <AppBar variant="primary" {...rest}>
    <Toolbar>
      <Logo />
      {children}
    </Toolbar>
  </AppBar>
);

export const SignInButton = props => (
  <RouterLink to="/login">
    <Button color="inherit" {...props}>
			Login
    </Button>
  </RouterLink>
);

export const SignOutButton = props => {
  const classes = useStyles();
  return (
    <IconButton color="inherit" className={classes.signOutButton} {...props}>
      <InputIcon />
    </IconButton>
  );
};

export const MenuButton = props => (
  <IconButton color="inherit" {...props}>
    <MenuIcon />
  </IconButton>
);

export const FlexGrow = () => {
  const classes = useStyles();
  return (<div className={classes.flexGrow} />)
};
