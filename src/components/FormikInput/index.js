import { Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

/**
 * Based upon TextField from material-ui with connection to formik through Field
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.type
 * @param {string} props.label
 * @param {object} props.formProps
 * @par
 */
const FormikInput = ({ name, formProps, ...rest }) => {
  const touched = formProps.touched[name];
  const error = touched && formProps.errors[name];
  return (
    <Field
      {...formProps}
      name={name}
      render={({ field }) => (
        <TextField
          {...rest}
          {...field}
          margin="normal"
          variant="outlined"
          error={!!error}
          helperText={error} />
      )} />
  );
};

FormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  formProps: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
  }).isRequired,
};

FormikInput.defaultProps = {
  type: 'string',
};

export default FormikInput;
