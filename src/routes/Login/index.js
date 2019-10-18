import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';

import { Center } from './styles';

const Login = (props) => (
	<Fragment>
		<Menu />
		<Main style={{
			background: 'url(/312.jpg) no-repeat center center',
			backgroundSize: 'cover',
		}}>
			<Center>
				<LoginForm />
			</Center>
		</Main>
		<Footer />
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;