import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default withRouter(props => (
	<IconButton onClick={props.history.goBack}>
		<ArrowBackIcon />
	</IconButton>
));