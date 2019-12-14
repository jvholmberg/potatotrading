import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';
import { Paper, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import Title from '../../../components/Title';
import AddButton from '../../../components/Buttons/Add';
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

/* eslint-disable  */
const SessionForm = ({ onSubmit, submitting }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        name: '',
        exercises: [],
      }}
      validationSchema={SessionSchema}
      onSubmit={onSubmit}
      render={({ values }) => (
        <Form>
            <Grid>
              <Title title="Create Session">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Title>
              <Paper className={classes.general}>
                <Field
                  name="name"
                  label="Name"
                  fullWidth
                  component={TextField}
                  disabled={submitting} />
              </Paper>
            </Grid>
            <Grid>
              <FieldArray
                name="exercises"
                render={arrayHelper => (
                  <>
                  <Title title="Create Session">
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                  </Title>
                    <AddButton
                      onClick={() => arrayHelper.push()}
                      disabled={submitting} />
                      {values.exercises.map((exercise, index) => (
                        <Paper className={classes.exercise}>
                          <Grid>
                            <Field
                              name={`exercises.${index}.name`}
                              label="Name"
                              component={TextField}
                              disabled={submitting} />
                          </Grid>
                          <Grid>
                            <Field
                              name={`exercises.${index}.comment`}
                              label="Comment"
                              component={TextField}
                              disabled={submitting} />
                          </Grid>
                        </Paper>
                      ))}
                  </>
                )} />
            </Grid>
        </Form>
      )} />
  );
};

export default SessionForm;
