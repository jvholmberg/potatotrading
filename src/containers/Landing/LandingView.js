import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import {
	Button,
	Input,
	Dropdown,
	Widget,
	Grid,
} from '../../components';

import RegisterWidget from '../../widgets/Register';
import LoginWidget from '../../widgets/Login';


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

        <Input.Text label='label'></Input.Text>
        <Input.Email validate required label='label'></Input.Email>
        Landing
				<Grid>
					<LoginWidget />
					<RegisterWidget />
				</Grid>
      </Fragment>
    );
  }
}

export default LandingView;
