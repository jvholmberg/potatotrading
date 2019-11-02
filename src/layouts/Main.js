import React, { Fragment } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const Main = ({ children }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});

	return (
		<Fragment>
			<Header isDesktop={isDesktop} />
			<Sidebar isDesktop={isDesktop} />
			<div>
				{children}
			</div>
			<Footer />
		</Fragment>
	)
};

export default Main;