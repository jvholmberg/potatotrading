import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class DashboardView extends PureComponent {

  componentDidUpdate(prevProps) {
    const { props } = this;

  }

  render() {
    const { props } = this;
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default DashboardView;
