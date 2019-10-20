import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const Landing = (props) => (
	<Fragment>
		<Main style={{
			background: 'url(/123.jpg) no-repeat center center',
			backgroundSize: 'cover',
		}}>
			landing
		</Main>
		<Footer />
	</Fragment>
);

Landing.propTypes = {
	
};

export default Landing;