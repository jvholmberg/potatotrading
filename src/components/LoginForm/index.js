import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Form, Input, Label, Error, PrimaryButton, SecondaryButton } from './styles';
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
			<Form onSubmit={formProps.handleSubmit}>
				<Field
					name='email'
					render={({ field }) => (
						<Label>
							Email
							<Input
								{...field}
								type='email'
								label='Name' />
								{formProps.touched.email && formProps.errors.email && (
									<Error>
										{formProps.errors.email}
									</Error>
								)}
						</Label>
					)} />
				<Field
					name='password'
					render={({ field }) => (
						<Label>
							Password
							<Input
								{...field}
								type='password'/>
								{formProps.touched.password && formProps.errors.password && (
									<Error>
										{formProps.errors.password}
									</Error>
								)}
						</Label>
					)} />
				<PrimaryButton type='submit' disabled={props.submitting}>
					Login
				</PrimaryButton>
				<SecondaryButton to='/register' disabled={props.submitting}>
					Login
				</SecondaryButton>
			</Form>
		)} />
);

Login.propTypes = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);