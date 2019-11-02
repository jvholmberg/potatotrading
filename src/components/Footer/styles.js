import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LinkComponent from '@material-ui/core/Link';

export const Copyright = () => (
	<Typography variant="body1">
		&copy;{' '}
		<Link to='/copyright' as={LinkComponent} >
			forkyfork
		</Link>
		. 2019
	</Typography>
);

export const Caption = (props) => (    
	<Typography variant="caption">
		Created with love for the environment. By designers and developers who
		love to work together in offices!
	</Typography>
);