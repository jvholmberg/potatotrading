import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import RegisterForm from './RegisterForm';

import { Center } from './styles';

const Login = (props) => (
	<Fragment>
		<Menu />
		<Main style={{
			background: 'url(/fitsum.jpg) no-repeat center center',
			backgroundSize: 'cover',
		}}>
			<Center>
				<RegisterForm />
			</Center>
		</Main>
		<Footer />
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;