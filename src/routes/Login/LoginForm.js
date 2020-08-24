import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import TextField from '../../components/TextField';

import { getToken } from '../../sagas/auth/actions';
import { selectGetTokenReq } from '../../sagas/auth/selectors';

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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch()
  const onSubmit = useCallback(val => dispatch(getToken(val)), [dispatch]);
  const { pending, error } = useSelector(selectGetTokenReq);

  const classes = useStyles();
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      {() => (
        <Form className={classes.root}>
          <Typography className={classes.title} variant="h2">Sign in</Typography>
          <Typography color="textSecondary" gutterBottom>
            Sign in to get access to all the goodies
          </Typography>
          <TextField
            name="email"
            type="email"
            label="Email"
            disabled={pending}
            fullWidth />
          <TextField
            name="password"
            type="password"
            label="Password"
            disabled={pending}
            fullWidth />
          <Button
            type="submit"
            fullWidth
            className={classes.signInButton}
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
          {error}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
