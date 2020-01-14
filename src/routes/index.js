import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps } from './selectors';

import MainLayout from '../layouts/Main';
import MinimalLayout from '../layouts/Minimal';

import ScreenSpy from '../components/ScreenSpy';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Overview from './Overview';
import Diary from './Diary';
import Settings from './Settings';
import NotFound from './NotFound';

const loggedInConfig = [MainLayout, [
  <Route path="/overview" component={Overview} />,
  <Route path="/diary" component={Diary} />,
  <Route path="/settings" component={Settings} />,
  <Route component={NotFound} />,
]];

const notLoggedInConfig = [MinimalLayout, [
  <Route path="/register" component={Register} />,
  <Route path="/login" component={Login} />,
  <Route component={NotFound} />,
]];

const Routes = ({ isLoggedIn }) => {
  const [Layout, ReachableRoutes] = isLoggedIn ? loggedInConfig : notLoggedInConfig;
  return (
    <Layout>
      <ScreenSpy />
      <Switch>
        <Route exact path="/" component={Landing} />
        {ReachableRoutes}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Routes);
