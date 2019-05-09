import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { setJwtToken } from '../../utils/localStorage';

import LoginForm from './LoginForm';

class LoginView extends PureComponent {

  componentDidUpdate(prevProps) {
    const { props } = this;

    const prevResponseGetJwt = _.get(prevProps, 'responseGetJwt', {});
    const responseGetJwt = _.get(props, 'responseGetJwt', {});

    if (prevResponseGetJwt.accessToken !== responseGetJwt.accessToken) {
      setJwtToken(responseGetJwt);
    }
  }

  login = (values) => {
    const { props } = this;
    props.getJwt(values, { force: true });
  }

  render() {
    const { props } = this;
    return (
      <LoginForm
        submitting={props.pendingGetJwt}
        error={props.errorGetJwt}
        onSubmit={this.login} />
    );
  }
}

export default LoginView;
