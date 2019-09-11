import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


class LandingView extends PureComponent {

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>Landing</title>
        </Helmet>
        Landing
      </Fragment>
    );
  }
}

export default LandingView;
