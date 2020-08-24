import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1
  },
}));

const HeaderMinimal = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" style={{ height: '35px' }} src="/logo_light.png" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <RouterLink to="/login">
          <Button color="inherit">
            Login
          </Button>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMinimal;
