import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray, Field } from 'formik';
import { Paper, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import Title from '../../../components/SectionTitle';
import AddButton from '../../../components/Buttons/Add';
import useStyles from './styles';

const ExercisesSection = ({ submitting, values }) => {
  const classes = useStyles();
  return (
    <Grid>
      <FieldArray
        name="exercises"
        render={arrayHelper => (
          <>
            <Title title="Add Exercises">
              Add exercises to your session.
              Dont forget to fill in sets.
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
  );
};

ExercisesSection.propTypes = {
  submitting: PropTypes.bool,
  values: PropTypes.shape({
    exercises: PropTypes.array,
  }).isRequired,
};

ExercisesSection.defaultProps = {
  submitting: false,
};

export default ExercisesSection;
