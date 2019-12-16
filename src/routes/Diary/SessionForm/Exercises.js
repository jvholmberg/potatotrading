import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FieldArray, Field } from 'formik';
import { Paper, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import AddButton from '../../../components/Buttons/Add';

import Sets from './Sets';
import useStyles from './styles';

const Exercise = ({ submitting, exercise: { sets }, exerciseIndex }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={4}>
      <Paper className={classes.exercise}>
        <Grid>
          <Grid>
            <Field
              name={`exercises.${exerciseIndex}.name`}
              label="Name"
              fullWidth
              component={TextField}
              disabled={submitting} />
          </Grid>
          <Grid>
            <Field
              name={`exercises.${exerciseIndex}.comment`}
              label="Comment"
              fullWidth
              component={TextField}
              disabled={submitting} />
          </Grid>
        </Grid>
        <Sets {...{ submitting, exerciseIndex, sets }} />
      </Paper>
    </Grid>
  );
};

Exercise.propTypes = {
  submitting: PropTypes.bool,
  exercise: PropTypes.shape({
    sets: PropTypes.array,
  }).isRequired,
  exerciseIndex: PropTypes.number.isRequired,
};

Exercise.defaultProps = {
  submitting: false,
};

const Exercises = ({ submitting, exercises }) => {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  return (
    <Grid>
      <FieldArray
        name="exercises"
        render={arrayHelper => (
          <Grid container>
            {exercises.map((exercise, exerciseIndex) => (
              <Exercise {...{
                key: exercise.key, submitting, exercise, exerciseIndex,
              }} />
            ))}
            <Grid xs={12} sm={6} lg={4}>
              <Paper className={classes.exercise}>
                <AddButton
                  onClick={() => {
                    arrayHelper.push({ key: count, sets: [] });
                    setCount(count + 1);
                  }}
                  disabled={submitting} />
              </Paper>
            </Grid>
          </Grid>
        )} />
    </Grid>
  );
};

Exercises.propTypes = {
  submitting: PropTypes.bool,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    sets: PropTypes.array,
  })).isRequired,
};

Exercises.defaultProps = {
  submitting: false,
};

export default Exercises;
