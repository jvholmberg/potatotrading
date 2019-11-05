import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

/**
 * 
 * @param {object} props
 * @param {number} props.length
 * @param {string} props.color
 */
const NotificationsButton = props => {
	const { length, color, ...rest } = props;
	return (
		<IconButton color='inherit' {...rest}>
			<Badge badgeContent={length} color={color} variant='dot'>
				<NotificationsIcon />
			</Badge>
		</IconButton>
	);
};

NotificationsButton.propTypes = {
	length: PropTypes.number.isRequired,
	color: PropTypes.string,
};

NotificationsButton.defaultProps = {
	length: 0,
	color: 'error',
};

export default NotificationsButton;