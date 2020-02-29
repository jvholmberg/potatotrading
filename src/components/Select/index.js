import React from 'react';
import PropTypes from 'prop-types';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiSelect from '@material-ui/core/Select';
import MuiOption from '@material-ui/core/MenuItem';
import { useField } from 'formik';

/**
 * Select
 *
 * @param {string} name -
 * @param {bool} fullWidth -
 * @param {string} [margin='dense'] - One of 'none', 'dense' or 'normal'
 * @param {string} label -
 * @param {string} [helperText=' '] -
 * @param {bool} [required=false] -
 */
const Select = ({
  fullWidth,
  margin,
  label,
  required,
  helperText,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const hasError = !!(meta.touched && meta.error);
  return (
    <MuiFormControl {...{
      fullWidth,
      margin,
      required,
      error: hasError
    }}>
      <MuiInputLabel>{label}</MuiInputLabel>
      <MuiSelect {...{
        ...field,
        ...rest,
      }} />
      <MuiFormHelperText>
        {hasError ? meta.error : helperText}
      </MuiFormHelperText>
    </MuiFormControl>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
};

Select.defaultProps = {
  margin: 'dense',
  fullWidth: false,
  label: '',
  helperText: ' ',
  required: false,
};

export default Select;
export { MuiOption as Option };
