import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FieldArray, Field } from 'formik';
import { Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import AddButton from '../../../components/Buttons/Add';
// import useStyles from './styles';

const SingleSet = ({ submitting, exerciseIndex, setIndex }) => (
  <Grid>
    <Field
      name={`exercises.${exerciseIndex}.sets.${setIndex}.reps`}
      label="Repetitions"
      component={TextField}
      disabled={submitting} />
    <Field
      name={`exercises.${exerciseIndex}.sets.${setIndex}.weight`}
      label="Weight"
      component={TextField}
      disabled={submitting} />
  </Grid>
);

SingleSet.propTypes = {
  submitting: PropTypes.bool,
  exerciseIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.number.isRequired,
};

SingleSet.defaultProps = {
  submitting: false,
};

const AllSets = ({ submitting, exerciseIndex, sets }) => {
  const [count, setCount] = useState(0);
  return (
    <Grid>
      <FieldArray
        name={`exercises.${exerciseIndex}.sets`}
        render={arrayHelper => (
          <>
            <AddButton
              onClick={() => {
                arrayHelper.push({ key: count, sets: [] });
                setCount(count + 1);
              }}
              disabled={submitting} />
            {sets.map((set, setIndex) => (
              <SingleSet {...{
                key: set.key, submitting, exerciseIndex, setIndex,
              }} />
            ))}
          </>
        )} />
    </Grid>
  );
};

AllSets.propTypes = {
  submitting: PropTypes.bool,
  exerciseIndex: PropTypes.number.isRequired,
  sets: PropTypes.arrayOf(PropTypes.shape({
    reps: PropTypes.number,
    weight: PropTypes.number,
  })).isRequired,
};

AllSets.defaultProps = {
  submitting: false,
};

export default AllSets;
