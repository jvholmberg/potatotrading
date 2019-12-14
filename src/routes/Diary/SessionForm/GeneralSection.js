import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Paper, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

import Title from '../../../components/SectionTitle';
import useStyles from './styles';

const GeneralSection = ({ submitting }) => {
  const classes = useStyles();
  return (
    <Grid>
      <Title title="New Session">
        Add a new entry to your diary.
        Give it a type and name to make it easier to find and compare it to similar sessions.
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
  );
};

GeneralSection.propTypes = {
  submitting: PropTypes.bool,
};

GeneralSection.defaultProps = {
  submitting: false,
};

export default GeneralSection;
