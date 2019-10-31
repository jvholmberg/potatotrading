import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export const Root = ({ children, ...rest }) => {
	const classes = useStyles();
	return (
		<div className={classes.root} {...rest}>
			{children}
		</div>
	);
};

export const Copyright = () => (
	<Typography variant="body1">
		&copy;{' '}
		<RouterLink to='/copyright'>
			<Link>forkyfork</Link>
		</RouterLink>
		. 2019
	</Typography>
);

export const Caption = (props) => (    
	<Typography variant="caption">
		Created with love for the environment. By designers and developers who
		love to work together in offices!
	</Typography>
);