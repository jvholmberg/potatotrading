import React from 'react';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field,
} from 'formik';
import * as Yup from 'yup';
import { Paper, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import Title from '../../../components/SectionTitle';

import Exercises from './Exercises';
import useStyles from './styles';

const SessionSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  exercises: Yup.array().of(Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    comment: Yup.string(),
  }))
});

const Session = ({ submitting }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={8} lg={6}>
      <Paper className={classes.general}>
        <Field
          name="name"
          label="Name"
          fullWidth
          component={TextField}
          disabled={submitting} />
      </Paper>
    </Grid>
  );
};

Session.propTypes = {
  submitting: PropTypes.bool,
};

Session.defaultProps = {
  submitting: false,
};

const SessionForm = ({ onSubmit, submitting }) => (
  <Formik
    initialValues={{
      name: '',
      exercises: [],
    }}
    validationSchema={SessionSchema}
    onSubmit={onSubmit}
    render={({ values: { exercises } }) => (
      <Form>
        <Title title="New Session">
          Add a new entry to your diary.
          Give it a type and name to make it easier to find and compare it to similar sessions.
        </Title>
        <Session {...{ submitting }} />
        <Title title="Add Exercises">
          Add exercises to your session. Dont forget to fill in sets.
        </Title>
        <Exercises {...{ submitting, exercises }} />
      </Form>
    )} />
);

SessionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

SessionForm.defaultProps = {
  submitting: false,
};

export default SessionForm;
