import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Main from '../../components/Main';
import LoginForm from './LoginForm';

import { Center } from './styles';

const Login = (props) => (
	<Fragment>
		<Main style={{
			background: 'url(/312.jpg) no-repeat center center',
			backgroundSize: 'cover',
		}}>
			<Center>
				<LoginForm />
			</Center>
		</Main>
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;