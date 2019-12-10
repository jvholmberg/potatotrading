import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';

/**
 * Inline date-picker
 *
 * @param {object} props -
 * @param {object} props.label -
 * @param {object} props.selectedDate -
 * @param {object} props.minDate -
 * @param {object} props.minDateMessage -
 * @param {object} props.maxDate -
 * @param {object} props.maxDateMessage -
 * @param {object} props.onChange -
 */
const InlineDatePicker = ({
  label,
  selectedDate,
  minDate,
  minDateMessage,
  maxDate,
  maxDateMessage,
  onChange,
}) => (
  <KeyboardDatePicker
    disableToolbar
    variant="inline"
    format="MM/dd/yyyy"
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
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  minDateMessage: PropTypes.string,
  maxDateMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InlineDatePicker.defaultProps = {
  minDate: null,
  maxDate: null,
  minDateMessage: null,
  maxDateMessage: null,
  label: 'Set date',
};

export default InlineDatePicker;
