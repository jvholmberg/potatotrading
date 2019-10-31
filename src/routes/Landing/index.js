import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Main from '../../components/Main';

const Landing = (props) => (
	<Fragment>
		<Main style={{
			background: 'url(/123.jpg) no-repeat center center',
			backgroundSize: 'cover',
		}}>
			landing
		</Main>
	</Fragment>
);

Landing.propTypes = {
	
};

export default Landing;