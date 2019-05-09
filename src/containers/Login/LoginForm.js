import React from "react";
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

const LoginForm = (props) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={LoginSchema}
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
        <button
          type='submit'
          kind='primary'
          disabled={props.submitting}>
          Log in
        </button>
      </form>
    )} />
);

export default LoginForm;