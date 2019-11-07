import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * ArrowBack button which is connected to react-router-dom.
 * On click will take user back in browser history.
 */
const BackButton = props => (
	<IconButton onClick={props.history.goBack}>
		<ArrowBackIcon />
	</IconButton>
)
export default withRouter(BackButton);