import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Copyright, Caption } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Copyright />
			<Caption />
		</div>
	);
}
	

export default Footer;
