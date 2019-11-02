import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MinimalLayout from '../../layouts/Minimal';
import LoginForm from './LoginForm';

const Login = (props) => (
	<MinimalLayout>
		<LoginForm />
	</MinimalLayout>
);

Login.propTypes = {
	
};

export default Login;