import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps } from './selectors';

import MainLayout from '../layouts/Main';
import MinimalLayout from '../layouts/Minimal';

import ScreenSpy from '../components/ScreenSpy';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Exercises from './Dashboard';
import Nutrition from './Dashboard';
import Settings from './Dashboard';
import NotFound from './NotFound';

const ControlledRoute = ({
  check, path, to, component, push,
}) => {
  if (check) return <Route {...{ path, component }} />;
  return <Redirect {...{ to, push }} />;
}

ControlledRoute.propTypes = {
  check: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  push: PropTypes.bool,
};

ControlledRoute.defaultProps = {
  push: false,
};

const LoggedInRoutes = [
  <Route path="/dashboard" component={Dashboard} />,
  <Route path="/exercises" component={Exercises} />,
  <Route path="/nutrition" component={Nutrition} />,
  <Route path="/settings" component={Settings} />,
  <Route component={NotFound} />,
];
const NotLoggedInRoutes = [
  <Route path="/register" component={Register} />,
  <Route path="/login" component={Login} />,
  <Route component={NotFound} />,
];

const Routes = ({ isLoggedIn }) => {
  const Layout = isLoggedIn
    ? MainLayout
    : MinimalLayout;
  return (
    <Layout>
      <ScreenSpy />
      <Switch>
        <Route exact path="/" component={Landing} />
        {isLoggedIn ? LoggedInRoutes : NotLoggedInRoutes}
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
