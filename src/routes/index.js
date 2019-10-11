import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import { mapStateToProps, mapDispatchToProps } from './selectors';

import { AppBar } from '../components';

const ControlledRoute = ({ check, path, to, component, push }) => check
	? (<Redirect { ...{ to, push } } />)
	: (<Route { ...{ path, component } }  />);

const ControlledLink = ({ check, ...rest }) => check
	? (<AppBar.Link {...rest} />)
	: (null);

class Routes extends Component {

	componentDidMount() {

	}

	render() {
		const { accessToken } = this.props;
		return (
			<Fragment>
				<AppBar>
					<AppBar.LeftSection>
						<ControlledLink check={!accessToken} to='/login'>Login</ControlledLink>
						<ControlledLink check={!accessToken} to='/register'>Register</ControlledLink>
						<ControlledLink check={accessToken} to='/dashboard'>Dashboard</ControlledLink>
					</AppBar.LeftSection>
					<AppBar.RightSection>
			
					</AppBar.RightSection>
				</AppBar>
				<Switch>
					<Route exact path='/' component={Landing} />
					<ControlledRoute
						check={accessToken}
						path='/register'
						to='/dashboard'
						component={Register} />
					<ControlledRoute
						check={accessToken}
						path='/login'
						to='/dashboard'
						component={Login} />
					<ControlledRoute
						check={!accessToken}
						path='/dashboard'
						to='/'
						component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}

Routes.propTypes = {
	authenticated: PropTypes.bool.isRequired,
};

Routes.defaultProps = {
	authenticated: false,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Routes);