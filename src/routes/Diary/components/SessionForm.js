import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DatePicker from '../../../components/DatePicker';
import TextField from '../../../components/TextField';
import Select, { Option } from '../../../components/Select';

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
        <DatePicker
          name="date"
          label="Date"
          disabled={submitting}
          fullWidth
          required />
        <Select
          name="type"
          disabled={submitting}
          label="Type"
          fullWidth
          required>
          {sessionTypes.map((type, index) => (
            <Option {...{ key: index, value: type.id }}>{type.name}</Option>
          ))}
        </Select>
        <TextField
          name="name"
          label="Name"
          disabled={submitting}
          fullWidth
          required />
        <TextField
          name="comment"
          label="Comment"
          disabled={submitting}
          fullWidth />
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
