import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const LoginSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
	});

const Login = (props) => (
	<Formik
		initialValues={{
			email: '',
			password: '',
		}}
		validationSchema={LoginSchema}
		onSubmit={props.getJwt}
		render={(formProps) => (
			<form onSubmit={formProps.handleSubmit}>

				<Field
					name='email'
					render={({ field }) => (
						<TextField
							{...field}
							label='Email'
							margin='normal'
							variant='outlined'
							error={formProps.touched.email && formProps.errors.email}
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
							error={formProps.touched.password && formProps.errors.password}
							helperText={formProps.touched.password && formProps.errors.password} />
					)} />
				<Button type='submit' disabled={props.submitting}>
					Login
				</Button>
				<Link to='/register'>
					<Button color='inherit'>
						Register
					</Button>
				</Link>
			</form>
		)} />
);

Login.propTypes = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);