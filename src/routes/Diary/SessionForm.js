import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import {
  Formik, Form, FieldArray,
} from 'formik';
import * as Yup from 'yup';
import { Paper, Grid, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  type: Yup.number()
    .required('Required'),
  comment: Yup.string()
    .required('Required'),
});

const initialValues = {
  name: '',
  entries: [],
};

const SessionForm = ({
  submitting,
  error,
  onSubmit,
  sessionTypes,
}) => (
  <Formik {...{ initialValues, validationSchema, onSubmit }}>
    {formProps => (
      <Form>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            disabled={submitting}>
            {sessionTypes.map((type, idx) => (
              <MenuItem {...{ key: idx, value: type.get('id') }}>{type.get('name')}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="name"
          label="Name"
          fullWidth
          disabled={submitting} />
        <TextField
          name="comment"
          label="Comment"
          fullWidth
          disabled={submitting} />
      </Form>
    )}
  </Formik>
);

SessionForm.propTypes = {
  submitting: PropTypes.bool,
  error: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  sessionTypes: PropTypes.instanceOf(Immutable.List),
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
