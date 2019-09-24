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
    onSubmit={props.onSubmit}
    render={(formProps) => (
      <form onSubmit={formProps.handleSubmit}>
        <input
          name='email'
          type='text'
          placeholder='Email'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.email} />
        <input
          name='password'
          type='password'
          placeholder='Password'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.password} />
        <input
          name='passwordVerify'
          type='password'
          placeholder='Verify password'
          onChange={formProps.handleChange}
          onBlur={formProps.handleBlur}
          value={formProps.values.passwordVerify} />
        <button
          type='submit'
          kind='primary'>
          Log in
        </button>
      </form>
    )} />
);


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Register);