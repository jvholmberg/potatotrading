import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import * as Yup from 'yup';
import {
  FormControl, InputLabel, MenuItem, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Required'),
  type: Yup.number()
    .required('Required'),
  name: Yup.string()
    .required('Required'),
  comment: Yup.string()
    .required('Required'),
});

const initialValues = {
  date: new Date(),
  type: '',
  name: '',
  comment: '',
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));
const SessionForm = ({
  submitting,
  // error,
  onSubmit,
  sessionTypes,
}) => {
  const classes = useStyles();
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      <Form className={classes.root}>
        <FormControl fullWidth>
          <KeyboardDatePicker
            name="date"
            label="Date"
            format="dd/MM/yyyy" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            disabled={submitting}>
            {sessionTypes.map((type, index) => (
              <MenuItem {...{ key: index, value: type.id }}>{type.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            name="name"
            label="Name"
            disabled={submitting} />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            name="comment"
            label="Comment"
            disabled={submitting} />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting}>
          Save
        </Button>
      </Form>
    </Formik>
  );
}

SessionForm.propTypes = {
  submitting: PropTypes.bool,
  error: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  sessionTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

SessionForm.defaultProps = {
  submitting: false,
  error: null,
  sessionTypes: []
};

export default connect(
  null,
  null,
)(SessionForm);
