import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

export const Logo = props => (
	<RouterLink to='/'>
		<img alt='Logo' src='/logo.svg' />
	</RouterLink>
);

export const SignInButton = props => (
	<RouterLink to='/login'>
		<Button color='inherit' {...props}>
			Login
		</Button>
	</RouterLink>
);

export const SignOutButton = props => (
	<IconButton color='inherit' {...props}>
		<InputIcon />
	</IconButton>
);

export const NotificationButton = ({ length, ...rest}) => (
	<IconButton color="inherit">
		<Badge badgeContent={length} color='error' variant='dot'>
			<NotificationsIcon />
		</Badge>
	</IconButton>
);

export const MenuButton = props => (
	<IconButton color='inherit' {...props}>
		<MenuIcon />
	</IconButton>
);

export const FlexGrow = styled.div`
	flex-grow: 1;
`;

          