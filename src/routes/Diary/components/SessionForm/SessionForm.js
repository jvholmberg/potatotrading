import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import DatePicker from '../../../../components/DatePicker';
import TextField from '../../../../components/TextField';
import Select, { Option } from '../../../../components/Select';
import { createSession } from '../../../../sagas/sessions/actions';
import { selectSessionTypeIds, selectSessionTypes } from '../../../../sagas/sessions/selectors';
import { selectSubmitting, selectError } from './SessionForm.selectors';

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

const SessionForm = () => {
  const dispatch = useDispatch()
  const onSubmit = useCallback(val => dispatch(createSession(val)), [dispatch]);
  const submitting = useSelector(selectError);
  const error = useSelector(selectSubmitting);
  const sessionTypeIds = useSelector(selectSessionTypeIds);
  const sessionTypes = useSelector(selectSessionTypes);
  const classes = useStyles();
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      {() => (
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
            {_.map(sessionTypeIds, id => (
              <Option {...{ key: id, value: id }}>
                {_.get(sessionTypes, `${id}.name`)}
              </Option>
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
          {error}
        </Form>
      )}
    </Formik>
  );
}

export default SessionForm;
