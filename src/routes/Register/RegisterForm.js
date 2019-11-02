import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
				<Field
					name='email'
					render={({ field }) => (
						<TextField
							{...field}
							type='email'
							label='Email'
							margin='normal'
							variant='outlined'
							error={(formProps.touched.email && formProps.errors.email) ? true : false}
							helperText={formProps.touched.email && formProps.errors.email} />
					)} />
				<Field
					name='password'
					render={({ field }) => (
						<TextField
							{...field}
							type='password'
							label='Password'
							margin='normal'
							variant='outlined'
							error={(formProps.touched.password && formProps.errors.password) ? true : false}
							helperText={formProps.touched.password && formProps.errors.password} />
					)} />
				<Field
					name='passwordVerify'
					render={({ field }) => (
						<TextField
							{...field}
							type='password'
							label='Verify password'
							margin='normal'
							variant='outlined'
							error={(formProps.touched.passwordVerify && formProps.errors.passwordVerify) ? true : false}
							helperText={formProps.touched.passwordVerify && formProps.errors.passwordVerify} />
					)} />
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