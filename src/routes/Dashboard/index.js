import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import CreateSession from '../../widgets/CreateSession';

const Login = (props) => (
	<Fragment>
		<Menu />
		<Main>
			<CreateSession />
		</Main>
		<Footer />
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;