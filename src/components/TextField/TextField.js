import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';
import { useField } from 'formik';

/**
 * Input
 *
 * @param {string} name -
 * @param {bool} fullWidth -
 * @param {string} [margin='dense'] - One of 'none', 'dense' or 'normal'
 * @param {string} label -
 * @param {string} [helperText=' '] -
 * @param {bool} [required=false] -
 */
const TextField = props => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);
  // eslint-disable-next-line react/destructuring-assignment
  const helperText = hasError ? meta.error : props.helperText;
  return (
    <MuiTextField {...{
      ...field,
      ...props,
      variant: 'filled',
      InputProps: {
        disableUnderline: true,
      },
      error: hasError,
      helperText,
    }} />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
};

TextField.defaultProps = {
  margin: 'dense',
  fullWidth: false,
  label: '',
  helperText: '',
  required: false,
};

export default TextField;
