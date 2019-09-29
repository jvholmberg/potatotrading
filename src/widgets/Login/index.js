import React from "react";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Widget, Input, Button } from '../../components';

// import { mapStateToProps, mapDispatchToProps } from './selectors';

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
	<Widget
		visible={props.visible}
		loading={props.loading}>
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={LoginSchema}
			onSubmit={props.getJwt}
			render={(formProps) => (
				<form onSubmit={formProps.handleSubmit}>
					<Input.Email
						name='email'
						label='Email'
						onChange={formProps.handleChange}
						onBlur={formProps.handleBlur}
						value={formProps.values.email}
						error={formProps.touched.email && formProps.errors.email} />
					<Input.Password
						name='password'
						label='Password'
						onChange={formProps.handleChange}
						onBlur={formProps.handleBlur}
						value={formProps.values.password}
						error={formProps.touched.password && formProps.errors.password} />
					<Button.Primary
						type='submit'
						kind='primary'
						disabled={props.submitting}>
						Log in
					</Button.Primary>
				</form>
			)} />
	</Widget>
);

export default connect(
	// mapStateToProps,
	// mapDispatchToProps,
)(Login);