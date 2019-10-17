import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './selectors';
import { Wrapper, Content } from './styles';

import Landing from '../../routes/Landing';
import Register from '../../routes/Register';
import Login from '../../routes/Login';
import Dashboard from '../../routes/Dashboard';
import NotFound from '../../routes/NotFound';

const ControlledRoute = ({ check, path, to, component, push }) => check
	?	(<Route { ...{ path, component } }  />)
	: (<Redirect { ...{ to, push } } />);

const Main = ({ accessToken }) => (
	<Wrapper>
		<Content>
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
					check={true}
					// check={accessToken}
					path='/dashboard'
					to='/'
					component={Dashboard} />
				<Route component={NotFound} />
			</Switch>
		</Content>
	</Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
