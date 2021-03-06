import React from 'react';
import PropTypes from 'prop-types';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiCheckbox from '@material-ui/core/Checkbox';
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
const Checkbox = ({
  label,
  fullWidth,
  helperText,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const hasError = !!(meta.touched && meta.error);
  return (
    <MuiFormControl {...{ fullWidth }}>
      <MuiFormControlLabel {...{
        label,
        control: (
          <MuiCheckbox {...{
            ...field,
            ...rest,
          }} />
        )
      }} />
      <MuiFormHelperText>
        {hasError ? meta.error : helperText}
      </MuiFormHelperText>
    </MuiFormControl>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
};

Checkbox.defaultProps = {
  fullWidth: false,
  margin: 'dense',
  label: '',
  helperText: '',
  required: false,
};

export default Checkbox;
