import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { getJwtToken, removeJwtToken } from '../../utils/localStorage';

import AppHeader from './AppHeader';
import AppRoutes from './AppRoutes';

class AppView extends PureComponent {

  logout = () => {
    const { props } = this;
    props.destroyJwt({ force: true });
    removeJwtToken();
  }

  componentDidMount() {
    const { props } = this;

    // Validate jwt-token if exists
    const jwt = getJwtToken();
    if (jwt) {
      props.validateJwt();
    }
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    // Re evaluate jwt-token
    if ((prevProps.pendingGetJwt && props.validGetJwt)
      || (prevProps.pendingDestroyJwt && props.validDestroyJwt)) {
        props.validateJwt({ force: true });
      }

    // Refresh jwt-token if queued
    if (!prevProps.queuedRefreshJwt
      && props.queuedRefreshJwt
      && !props.pendingRefreshToken) {
        const jwt = getJwtToken();
        props.refreshJwt(jwt.refreshToken, { force: true });
      }
  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        <AppHeader
          loggedIn={props.validValidateJwt}
          logout={this.logout} />
        <AppRoutes
          loggedIn={props.validValidateJwt} />
      </Fragment>
    );
  }
}

export default AppView;
