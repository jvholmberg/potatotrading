import React from 'react';
import { Link } from 'react-router-dom';
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
	<Link to='/' {...props}>
		<img alt='Logo' src='/logo.svg' />
	</Link>
);

export const Root = ({ children, ...rest }) => (
	<AppBar position='sticky' variant='primary' {...rest}>
		<Toolbar>
			<Logo />
			{children}
		</Toolbar>
	</AppBar>
);

export const SignInButton = (props) => (
	<Link to='/login'>
		<Button color='inherit' {...props}>
			Login
		</Button>
	</Link>
);

export const SignOutButton = (props) => {
	const classes = useStyles();
	return (
		<IconButton color='inherit' className={classes.signOutButton} {...props}>
			<InputIcon />
		</IconButton>
	);
};

export const NotificationButton = ({ length, ...rest}) => (
	<IconButton color='inherit' {...rest}>
		<Badge badgeContent={length} color='error' variant='dot'>
			<NotificationsIcon />
		</Badge>
	</IconButton>
);

export const MenuButton = (props) => (
	<IconButton color='inherit' {...props}>
		<MenuIcon />
	</IconButton>
);

export const FlexGrow = () => {
	const classes = useStyles();
	return (<div className={classes.flexGrow} />)
};

          