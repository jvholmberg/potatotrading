import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import MinimalLayout from '../../layouts/Minimal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm';

const useStyles = makeStyles(theme => ({
	root: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
	},
	leftContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    backgroundImage: 'url(/fitsum.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
	},
	leftTitle: {
    color: theme.palette.white,
    fontWeight: 300
  },
	rightContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
	},
}));

const Login = (props) => {
	const classes = useStyles();
	return (
		<MinimalLayout noFooter>
			<Grid
				className={classes.root}
				container
				direction='row'
				justify='space-evenly'
				alignItems='stretch'
				alignContent='stretch'>
				<Grid
					item
					lg={5}
					className={classes.leftContainer}>
					<Typography className={classes.leftTitle} variant="h1">
						Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
						they sold out High Life.
					</Typography>
				</Grid>
				<Grid
					item
					lg={7}
					xs={12}
					className={classes.rightContainer}>
					<LoginForm />
				</Grid>
			</Grid>
		</MinimalLayout>
	);
};

Login.propTypes = {
	
};

export default Login;