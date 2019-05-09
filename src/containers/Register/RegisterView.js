import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './RegisterForm';

class RegisterView extends PureComponent {

  render() {
    const { props } = this;
    return (
      <RegisterForm
        error={props.registerError}
        onSubmit={props.register} />
    );
  }
}

export default RegisterView;
