
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

/**
 * Add button. Simple as that.
 *
 * @param {object} props
 */
const AddButton = props => (
  <IconButton {...props}>
    <AddIcon />
  </IconButton>
);

export default AddButton;
