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
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TextField from '../../../components/TextField';
import { selectChangePasswordReq } from '../../../sagas/auth/selectors';
import { changePassword } from '../../../sagas/auth/actions';

const cardHeaderProps = {
  avatar: (
    <Avatar aria-label="Update password">
      <VpnKeyIcon />
    </Avatar>
  ),
  title: 'Change password',
  subheader: 'Select a new password',
};

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Required'),
  newPasswordVerify: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords does not match')
    .required('Required'),
  currentPassword: Yup.string()
    .required('Required'),
});

const initialValues = {
  newPassword: '',
  newPasswordVerify: '',
  currentPassword: '',
};

const ChangePassword = () => {
  const dispatch = useDispatch()
  const onSubmit = value => dispatch(changePassword(value));

  const { pending } = useSelector(selectChangePasswordReq);

  return (
    <Card>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {() => (
          <Form>
            <CardHeader {...cardHeaderProps} />
            <Divider />
            <CardContent>
              <TextField
                type="password"
                name="newPassword"
                label="New password"
                disabled={pending}
                fullWidth
                required />
              <TextField
                type="password"
                name="newPasswordVerify"
                label="Verify new password"
                disabled={pending}
                fullWidth
                required />
              <TextField
                type="password"
                name="currentPassword"
                label="Current password"
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
                Update
              </Button>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  )
};
export default React.memo(ChangePassword);
