import React, { Fragment } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import Header from './components/Header';
import Footer from './components/Footer';

const Minimal = ({ children }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});

	return (
		<Fragment>
			<Header isDesktop={isDesktop} />
			{children}
			<Footer />
		</Fragment>
	)
};

export default Minimal;