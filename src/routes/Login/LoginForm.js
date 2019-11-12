import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import FormikInput from '../../components/FormikInput';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const LoginFormSchema = Yup
  .object()
  .shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

const LoginForm = ({ getJwt, submitting }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginFormSchema}
      onSubmit={getJwt}
      render={formProps => (
        <form className={classes.root} onSubmit={formProps.handleSubmit}>
          <Typography className={classes.title} variant="h2">Sign in</Typography>
          <Typography color="textSecondary" gutterBottom>
            Sign in to get access to all the goodies
          </Typography>
          <FormikInput name="email" type="email" label="Email" fullWidth formProps={formProps} />
          <FormikInput name="password" type="password" label="Password" fullWidth formProps={formProps} />
          <Button
            type="submit"
            fullWidth
            className={classes.signInButton}
            disabled={submitting}
            color="primary"
            size="large"
            variant="contained">
            Login
          </Button>
          <Typography color="textSecondary" variant="body1">
            Don&apos;t have an account?
            {' '}
            <Link component={RouterLink} to="/register" variant="h6">Sign up</Link>
          </Typography>
        </form>
      )} />
  );
};

LoginForm.propTypes = {
  getJwt: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

LoginForm.defaultProps = {
  submitting: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
