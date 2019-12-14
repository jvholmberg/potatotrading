import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import GeneralSection from './GeneralSection';
import ExercisesSection from './ExercisesSection';

const SessionSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  exercises: Yup.array().of(Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    comment: Yup.string(),
  }))
});

const SessionForm = ({ onSubmit, submitting }) => (
  <Formik
    initialValues={{
      name: '',
      exercises: [],
    }}
    validationSchema={SessionSchema}
    onSubmit={onSubmit}
    render={({ values }) => (
      <Form>
        <GeneralSection submitting={submitting} />
        <ExercisesSection submitting={submitting} values={values} />
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
