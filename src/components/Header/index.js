import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Hidden, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { Root, SignInButton, SignOutButton, NotificationButton, MenuButton, FlexGrow } from './styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const Header = props => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});

	return (
		<Root>
			<FlexGrow />
			{props.accessToken ? (
				<Hidden mdDown>
					<NotificationButton length={1} />
					<SignOutButton onClick={props.destroyJwt} />
				</Hidden>
			) : (
				<Hidden mdDown>
					<SignInButton />
				</Hidden>
			)}
			<Hidden lgUp>
				<MenuButton onClick={() => !isDesktop && props.setSidebarOpen(!props.sidebarOpen)} />
			</Hidden>
		</Root>
	);
};

Header.propTypes = {
	accessToken: PropTypes.string
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
