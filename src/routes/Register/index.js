import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TiltedSection from '../../components/TiltedSection';
import Main from '../../components/Main';
import RegisterForm from './RegisterForm';

import { Center } from './styles';

const Login = (props) => (
	<Fragment>
		<TiltedSection style={{
			backgroundImage: 'linear-gradient(#f11b1b, #fff35d)',
			border: '1px solid rgb(226, 212, 53)',
		}}>
			<RegisterForm />
		</TiltedSection>
		<Main style={{
		}}>
			<Center>
			</Center>
		</Main>
	</Fragment>
);

Login.propTypes = {
	
};

export default Login;