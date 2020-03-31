import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './selectors';

import MainLayout from '../layouts/Main';
import MinimalLayout from '../layouts/Minimal';

import ScreenSpy from '../components/ScreenSpy';
import ScrollTop from '../components/ScrollTop';

import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Overview from './Overview';
import Diary from './Diary';
import Settings from './Settings';
import NotFound from './NotFound';

const loggedInConfig = [MainLayout, [
  { path: '/overview', component: Overview },
  { path: '/diary', component: Diary },
  { path: '/settings', component: Settings },
]];

const notLoggedInConfig = [MinimalLayout, [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
]];

const Routes = ({ isLoggedIn, getMyUser }) => {
  const [Layout, routesConfig] = !isLoggedIn ? loggedInConfig : notLoggedInConfig;
  React.useEffect(() => {
    if (isLoggedIn) {
      getMyUser()
    }
  }, [isLoggedIn, getMyUser]);
  return (
    <Layout>
      <ScreenSpy />
      <ScrollTop />
      <Switch>
        <Route exact path="/" component={Landing} />
        {routesConfig.map(({ path, component }, key) => <Route {...{ key, path, component }} />)}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  getMyUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
