import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import TextField from '../../components/TextField';
import { createUser } from '../../sagas/users/actions';
import { selectCreateUserReq } from '../../sagas/users/selectors';

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
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  passwordVerify: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords does not match')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
  passwordVerify: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch()
  const onSubmit = useCallback(val => dispatch(createUser(val)), [dispatch]);
  const { pending, error } = useSelector(selectCreateUserReq);

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
          <TextField
            name="passwordVerify"
            type="password"
            label="Verify password"
            disabled={pending}
            fullWidth />
          <Button
            type="submit"
            fullWidth
            className={classes.signUpButton}
            disabled={pending}
            color="primary"
            size="large"
            variant="contained">
            Register
          </Button>
          {error}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
