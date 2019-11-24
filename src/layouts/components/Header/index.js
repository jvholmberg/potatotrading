import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputIcon from '@material-ui/icons/Input';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import NotificationsButton from '../../../components/Buttons/Notifications';
import MenuButton from '../../../components/Buttons/Menu';
import { mapStateToProps, mapDispatchToProps } from './selectors';

import useStyles from './styles';

const Header = ({
  accessToken, destroyJwt, noMenuButton,
}) => {
  const classes = useStyles();
  return (
    <AppBar variant="primary">
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="/logo.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        {accessToken ? (
          <Hidden xsDown>
            <NotificationsButton length={1} />
            <IconButton color="inherit" className={classes.signOutButton} onClick={destroyJwt}>
              <InputIcon />
            </IconButton>
          </Hidden>
        ) : (
          <Hidden xsDown>
            <RouterLink to="/login">
              <Button color="inherit">
                Login
              </Button>
            </RouterLink>
          </Hidden>
        )}
        {!noMenuButton && (
          <Hidden mdUp>
            <MenuButton />
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  accessToken: PropTypes.string,
  destroyJwt: PropTypes.func,
  noMenuButton: PropTypes.bool,
};

Header.defaultProps = {
  accessToken: null,
  destroyJwt: null,
  noMenuButton: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
