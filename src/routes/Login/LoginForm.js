import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { mapStateToProps, mapDispatchToProps } from './selectors';

const useStyles = makeStyles(theme => ({
	form: {
		padding: 120
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

const LoginForm = (props) => {
	const classes = useStyles();
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={LoginFormSchema}
			onSubmit={props.getJwt}
			render={(formProps) => (
				<form className={classes.form} onSubmit={formProps.handleSubmit}>
					<Typography className={classes.title} variant='h2'>
						Sign in
					</Typography>
					<Typography color='textSecondary' gutterBottom>
						Sign in to get access to all the goodies
					</Typography>
					<Field
						name='email'
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								className={classes.textField}
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
								fullWidth
								className={classes.textField}
								type='password'
								label='Password'
								margin='normal'
								variant='outlined'
								error={(formProps.touched.password && formProps.errors.password) ? true : false}
								helperText={formProps.touched.password && formProps.errors.password} />
						)} />
					<Button
						type='submit'
						fullWidth
						className={classes.signInButton}
						disabled={props.submitting}
						color='primary'
						size='large'
						variant='contained'>
						Login
					</Button>
					<Typography color="textSecondary" variant="body1">
						Don't have an account?{' '}
						<Link component={RouterLink} to="/register" variant="h6">
							Sign up
						</Link>
					</Typography>
				</form>
			)} />
	);
};

LoginForm.propTypes = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginForm);