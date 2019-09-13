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
        <Button.Primary btnSize='xs'>Primary</Button.Primary>
        <Button.Secondary btnSize='sm'>Secondary</Button.Secondary>
        <Button.Success btnSize='md'>Success</Button.Success>
        <Button.Danger btnSize='lg'>Danger</Button.Danger>
        <Button.Warning>Warning</Button.Warning>
        <Button.Info>Info</Button.Info>
        <Button.Light>Light</Button.Light>
        <Button.Dark>Dark</Button.Dark>
        <Button.Link>Link</Button.Link>
        Landing
      </Fragment>
    );
  }
}

export default LandingView;
