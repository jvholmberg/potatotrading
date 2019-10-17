import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Main from '../components/Main';

export default () => (
	<Fragment>
		<Menu />
		<Main />
		<Footer />
	</Fragment>
);
