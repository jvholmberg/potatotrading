import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';

/**
 * Save button. Simple as that.
 *
 * @param {object} props
 */
const SaveButton = props => (
  <IconButton {...props}>
    <SaveIcon />
  </IconButton>
);

export default SaveButton;
