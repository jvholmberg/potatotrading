import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps } from './selectors';

import ScreenSpy from '../components/ScreenSpy';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
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

const Routes = ({ isLoggedIn }) => (
  <>
    <ScreenSpy />
    <Switch>
      <Route exact path="/" component={Landing} />
      <ControlledRoute
        check={!isLoggedIn}
        path="/register"
        to="/dashboard"
        component={Register} />
      <ControlledRoute
        check={!isLoggedIn}
        path="/login"
        to="/dashboard"
        component={Login} />
      <ControlledRoute
        check={!isLoggedIn}
        path="/dashboard"
        to="/"
        component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </>
);

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Routes);
