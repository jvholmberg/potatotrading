import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MinimalLayout from '../../layouts/Minimal';
import RegisterForm from './RegisterForm';

import { Center } from './styles';

const Login = (props) => (
	<MinimalLayout>
		<RegisterForm />
	</MinimalLayout>
);

Login.propTypes = {
	
};

export default Login;