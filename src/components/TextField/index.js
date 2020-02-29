import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';
import { useField } from 'formik';

const TextField = props => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);
  // eslint-disable-next-line react/destructuring-assignment
  const helperText = hasError ? meta.error : props.helperText;
  return (
    <MuiTextField {...{
      ...field,
      ...props,
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
};

TextField.defaultProps = {
  fullWidth: false,
  margin: 'dense',
  label: '',
  helperText: ' ',
};

export default TextField;
