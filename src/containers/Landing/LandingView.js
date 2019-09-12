import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Button } from '../../components';


class LandingView extends PureComponent {

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>Landing</title>
        </Helmet>
        <Button.Primary>
          btn
        </Button.Primary>
        Landing
      </Fragment>
    );
  }
}

export default LandingView;
