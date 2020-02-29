import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker as MuiKeyboardDatePicker } from '@material-ui/pickers';
import { useField } from 'formik';

/**
 * Date-picker
 *
 * @param {string} name -
 * @param {bool} fullWidth -
 * @param {string} [margin='dense'] - One of 'none', 'dense' or 'normal'
 * @param {string} label -
 * @param {string} [helperText=' '] -
 * @param {bool} [required=false] -
 * @param {string} ariaLabel -
 */
const DatePicker = ({
  ariaLabel,
  ...rest
}) => {
  const [field, meta, helpers] = useField(rest);
  const hasError = !!(meta.touched && meta.error);
  // eslint-disable-next-line react/destructuring-assignment
  const helperText = hasError ? meta.error : rest.helperText;
  return (
    <MuiKeyboardDatePicker {...{
      ...rest,
      ...field,
      onChange: helpers.setValue,
      variant: 'inline',
      format: 'dd/MM/yyyy',
      error: hasError,
      helperText,
      KeyboardButtonProps: {
        'aria-label': ariaLabel,
      }
    }} />
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

DatePicker.defaultProps = {
  margin: 'none',
  fullWidth: false,
  label: '',
  helperText: '',
  required: false,
  ariaLabel: 'Select date',
};

export default DatePicker;
