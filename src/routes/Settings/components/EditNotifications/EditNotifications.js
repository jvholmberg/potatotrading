import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Avatar,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Checkbox from '../../../../components/Checkbox';
import { selectChangePasswordReq } from '../../../../sagas/settings/selectors';
import { changePassword } from '../../../../sagas/settings/actions';

const cardHeaderProps = {
  avatar: (
    <Avatar aria-label="Edit notifications">
      <NotificationsIcon />
    </Avatar>
  ),
  title: 'Edit notifications',
  subheader: 'Select what notifications to receive',
};

const validationSchema = Yup.object().shape({
  emailNotifications: Yup.boolean(),
  pushNotifications: Yup.boolean(),
  smsNotifications: Yup.boolean(),
});

const initialValues = {
  emailNotifications: '',
  pushNotifications: '',
  smsNotifications: '',
};

const Notifications = () => {
  const dispatch = useDispatch()
  const onSubmit = value => dispatch(changePassword(value));
  const submitting = false;

  const {  } = useSelector(selectChangePasswordReq);

  return (
    <Card>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {() => (
          <Form>
            <CardHeader {...cardHeaderProps} />
            <Divider />
            <CardContent>
              <Checkbox
                name="emailNotifications"
                label="Email notificaitons"
                disabled={submitting}
                fullWidth
                required />
              <Checkbox
                name="pushNotifications"
                label="Push notificaitons"
                disabled={submitting}
                fullWidth
                required />
              <Checkbox
                name="smsNotifications"
                label="Sms notifications"
                disabled={submitting}
                fullWidth
                required />
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                type="submit"
                color="primary"
                disabled={submitting}>
                Save
              </Button>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  )
};
export default React.memo(Notifications);
