import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

class DashboardView extends PureComponent {

  componentDidUpdate(prevProps) {
    const { props } = this;

  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        Dashboard
      </Fragment>
    );
  }
}

export default DashboardView;
