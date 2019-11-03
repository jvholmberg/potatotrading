import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = ({ noFooter }) => {
	const classes = useStyles();
	if (noFooter) return (null);

	return (
		<div className={classes.root}>
			<Typography variant="body1">
				&copy;{' '}
				<Link to='/copyright' as={LinkComponent} >
					forkyfork
				</Link>
				. 2019
			</Typography>
			<Typography variant="caption">
				Created with love for the environment. By designers and developers who
				love to work together in offices!
			</Typography>
		</div>
	);
}

export default Footer;