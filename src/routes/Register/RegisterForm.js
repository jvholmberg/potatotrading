import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Input, Button } from './styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const RegisterSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
    passwordVerify: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords does not match')
      .required('Required'),
  });

const Register = (props) => (
	<Formik
		initialValues={{
			email: '',
			password: '',
			passwordVerify: '',
		}}
		validationSchema={RegisterSchema}
		onSubmit={props.createUser}
		render={(formProps) => (
			<form onSubmit={formProps.handleSubmit}>
				<Input
					name='email'
					label='Email'
					onChange={formProps.handleChange}
					onBlur={formProps.handleBlur}
					value={formProps.values.email}
					error={formProps.touched.email && formProps.errors.email}  />
				<Input
					name='password'
					label='Password'
					onChange={formProps.handleChange}
					onBlur={formProps.handleBlur}
					value={formProps.values.password}
					error={formProps.touched.password && formProps.errors.password} />
				<Input
					name='passwordVerify'
					label='Verify password'
					onChange={formProps.handleChange}
					onBlur={formProps.handleBlur}
					value={formProps.values.passwordVerify}
					error={formProps.touched.passwordVerify && formProps.errors.passwordVerify}  />
				<Button type='submit'>
					Register
				</Button>
			</form>
		)} />
);

Register.propTypes = {

};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Register);