import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
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
const FormikInput = props => {
	const { name, formProps, ...rest } = props
	const touched = formProps.touched[name];
	const error = formProps.errors[name];
	return (
		<Field
			name={name}
			render={({ field }) => (
				<TextField
					{...field}
					{...rest}
					margin='normal'
					variant='outlined'
					error={(touched && error) ? true : false}
					helperText={touched && error} />
			)} />
	);
};

FormikInput.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	formProps: PropTypes.object.isRequired,
};

FormikInput.defaultProps = {
	type: 'string',
};

export default FormikInput;
