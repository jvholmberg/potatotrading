import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import RegisterForm from './RegisterForm';

class RegisterView extends PureComponent {

  render() {
    const { props } = this;
    return (
      <Fragment>
        <Helmet>
          <title>Potato trading - Register</title>
        </Helmet>
        <RegisterForm
          error={props.registerError}
          onSubmit={props.register} />
      </Fragment>
    );
  }
}

export default RegisterView;
