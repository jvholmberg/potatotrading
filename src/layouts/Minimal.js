import React, { Fragment } from 'react';

import Header from './components/Header';
import { Content } from './components/Content';
import Footer from './components/Footer';

const Minimal = ({ children, noFooter }) => (
	<Fragment>
		<Header />
		<Content>
			{children}
			{!noFooter && (<Footer />)}
		</Content>
	</Fragment>
);

export default Minimal;