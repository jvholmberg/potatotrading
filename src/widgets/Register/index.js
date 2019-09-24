import React from "react";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Widget, Input, Button } from '../../components';
import { mapStateToProps, mapDispatchToProps } from "./selectors";

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
        <Input.Email
          name='email'
          placeholder='Email'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.email} />
        <Input.Password
          name='password'
          placeholder='Password'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.password} />
        <Input.Password
          name='passwordVerify'
          placeholder='Verify password'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.passwordVerify} />
        <Button.Primary type='submit'>
          Log in
        </Button.Primary>
      </form>
    )} />
);


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Register);