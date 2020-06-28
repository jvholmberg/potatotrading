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
import Checkbox from '../../../components/Checkbox';
import { selectUpdateNotificationsSettingsReq } from '../../../sagas/settings/selectors';
import { changePassword } from '../../../sagas/auth/actions';

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

  const { pending } = useSelector(selectUpdateNotificationsSettingsReq);

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
                disabled={pending}
                fullWidth
                required />
              <Checkbox
                name="pushNotifications"
                label="Push notificaitons"
                disabled={pending}
                fullWidth
                required />
              <Checkbox
                name="smsNotifications"
                label="Sms notifications"
                disabled={pending}
                fullWidth
                required />
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
export default React.memo(Notifications);
