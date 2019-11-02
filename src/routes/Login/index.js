import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

import { Center } from './styles';

const Login = (props) => (
	<Fragment>
			<Center>
				<LoginForm />
			</Center>
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;