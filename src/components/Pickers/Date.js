import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';

/**
 * Inline date-picker
 *
 * @param {object} props -
 * @param {object} props.variant -
 * @param {object} props.label -
 * @param {object} props.selectedDate -
 * @param {object} props.minDate -
 * @param {object} props.minDateMessage -
 * @param {object} props.maxDate -
 * @param {object} props.maxDateMessage -
 * @param {object} props.onChange -
 */
const InlineDatePicker = ({
  variant,
  label,
  selectedDate,
  minDate,
  minDateMessage,
  maxDate,
  maxDateMessage,
  onChange,
}) => (
  <KeyboardDatePicker
    variant={variant}
    format="dd/MM/yyyy"
    margin="normal"
    label={label}
    value={selectedDate}
    minDate={minDate}
    minDateMessage={minDateMessage}
    maxDate={maxDate}
    maxDateMessage={maxDateMessage}
    onChange={onChange}
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }} />
);

InlineDatePicker.propTypes = {
  variant: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  minDateMessage: PropTypes.string,
  maxDateMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InlineDatePicker.defaultProps = {
  variant: 'inline',
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  label: 'Set date',
};

export default InlineDatePicker;
