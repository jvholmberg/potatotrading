import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AppBar, Toolbar, Hidden } from '@material-ui/core';

import { Logo, SignInButton, SignOutButton, NotificationButton, MenuButton, FlexGrow } from './styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Header = props => {
	const { accessToken, destroyJwt } = props;
	const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
				<Logo />
				<FlexGrow />
				{accessToken ? (
					<Hidden mdDown>
						<NotificationButton length={1} />
						<SignOutButton
							className={classes.signOutButton}
							onClick={destroyJwt} />
					</Hidden>
				) : (
					<Hidden mdDown>
						<SignInButton />
					</Hidden>
				)}
        <Hidden lgUp>
					<MenuButton />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
