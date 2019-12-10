import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

/**
 * Edit button. Simple as that.
 *
 * @param {object} props
 */
const EditButton = props => (
  <IconButton {...props}>
    <EditIcon />
  </IconButton>
);

export default EditButton;
