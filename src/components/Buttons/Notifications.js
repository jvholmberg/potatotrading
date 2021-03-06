import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

/**
 * Notifications button with a badge. Used to display notifications which user may interract with.
 *
 * @param {object} props
 * @param {number} props.length - Number of notifications
 * @param {string} props.color - Color of badge
 */
const NotificationsButton = props => {
  const { length, color, ...rest } = props;
  return (
    <IconButton color="inherit" {...rest}>
      <Badge badgeContent={length} color={color} variant="dot">
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
  color: 'error',
};

export default NotificationsButton;
