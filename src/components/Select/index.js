import React from 'react';
import PropTypes from 'prop-types';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiSelect from '@material-ui/core/Select';
import Option from '@material-ui/core/MenuItem';
import { useField } from 'formik';

const Select = ({
  fullWidth,
  margin,
  label,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const hasError = !!(meta.touched && meta.error);
  // eslint-disable-next-line react/destructuring-assignment
  const helperText = hasError ? meta.error : rest.helperText;
  return (
    <MuiFormControl {...{
      fullWidth,
      margin,
      error: hasError
    }}>
      <MuiInputLabel>{label}</MuiInputLabel>
      <MuiSelect {...{
        ...field,
        ...rest,
      }} />
      <MuiFormHelperText>
        {helperText}
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
};

Select.defaultProps = {
  margin: 'dense',
  fullWidth: false,
  label: '',
  helperText: ' ',
};

export default Select;
export { Option };
