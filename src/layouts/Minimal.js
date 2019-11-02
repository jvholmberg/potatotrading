import React, { Fragment } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const Minimal = ({ children }) => (
	<Fragment>
		<Header />
		<Content>{children}</Content>
		<Footer />
	</Fragment>
);

export default Minimal;