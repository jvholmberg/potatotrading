import React, { Fragment } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

const Main = ({ children }) => (
	<Fragment>
		<Header />
		<Sidebar />
		<Content>
			{children}
			<Footer />
		</Content>
	</Fragment>
);

export default Main;