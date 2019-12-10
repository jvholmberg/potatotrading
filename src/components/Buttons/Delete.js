import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

/**
 * Delete button. Simple as that.
 *
 * @param {object} props
 */
const DeleteButton = props => (
  <IconButton {...props}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
