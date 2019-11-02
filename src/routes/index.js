import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps } from './selectors';

import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const ControlledRoute = ({ check, path, to, component, push }) => check
	?	(<Route { ...{ path, component } }  />)
	: (<Redirect { ...{ to, push } } />);

const Routes = ({ accessToken }) => (
	<Switch>
		<Route exact path='/' component={Landing} />
		<ControlledRoute
			check={!accessToken}
			path='/register'
			to='/dashboard'
			component={Register} />
		<ControlledRoute
			check={!accessToken}
			path='/login'
			to='/dashboard'
			component={Login} />
		<ControlledRoute
			check={accessToken}
			path='/dashboard'
			to='/'
			component={Dashboard} />
		<Route component={NotFound} />
	</Switch>
);

export default connect(
	mapStateToProps,
	null,
)(Routes);