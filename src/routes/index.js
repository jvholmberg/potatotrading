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

import Menu from '../components/Menu';

import { AppBar } from '../components';

const ControlledRoute = ({ check, path, to, component, push }) => check
	?	(<Route { ...{ path, component } }  />)
	: (<Redirect { ...{ to, push } } />);

class Routes extends Component {

	componentDidMount() {

	}

	render() {
		const { accessToken } = this.props;
		return (
			<Fragment>
				<Menu />
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