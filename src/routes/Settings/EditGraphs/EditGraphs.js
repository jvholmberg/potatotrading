import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Avatar,
} from '@material-ui/core';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { selectEditGraphsSettingsReq, selectGraphsSettings } from '../../../sagas/settings/selectors';
import { editGraphsSettings } from '../../../sagas/settings/actions';
import Select, { Option } from '../../../components/Select';

const cardHeaderProps = {
  avatar: (
    <Avatar {...{ imgProps: { ariaLabel: 'Edit graphs' } }}>
      <DataUsageIcon />
    </Avatar>
  ),
  title: 'Edit graphs',
  subheader: 'Configure how graphs should be displayed',
};

const validationSchema = Yup.object().shape({
  dataPeriod: Yup.string()
    .required('Required'),
});

const initialValues = {
  dataPeriod: '',
};

const EditGraph = () => {
  const dispatch = useDispatch()
  const onSubmit = value => dispatch(editGraphsSettings(value));

  const { pending } = useSelector(selectEditGraphsSettingsReq);
  const { dataPeriod } = useSelector(selectGraphsSettings);

  return (
    <Card>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {() => (
          <Form>
            <CardHeader {...cardHeaderProps} />
            <Divider />
            <CardContent>
              <Select
                name="dataPeriod"
                disabled={pending}
                label="Type"
                fullWidth
                required>
                {_.map(dataPeriod.allIds, id => (
                  <Option {...{ key: id, value: id }}>
                    {_.get(dataPeriod.byId, `${id}.name`)}
                  </Option>
                ))}
              </Select>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                type="submit"
                color="primary"
                disabled={pending}>
                Save
              </Button>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  )
};
export default React.memo(EditGraph);
